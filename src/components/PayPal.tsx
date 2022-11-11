/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { config } from '../api/config';
import { useAppSelector } from '../state/hooks';
import { PurchasePaypalItemType } from '../types';

export default function Paypal() {
	const { cartProducts, totalPrice, totalQuantity } = useAppSelector(state => state.root.cart)
	const paypalOptions = {
		'client-id': config.paypalClientId,
		intent: 'capture',
		currency: 'USD'
	};
	const items: PurchasePaypalItemType[] = cartProducts.map((item) => (
		{
			name: item.name,
			unit_amount: {
				currency_code: 'USD',
				value: (item.price * item.quantity) as unknown as string,
			},
			quantity: item.quantity as unknown as string,
		}
	));
	const payee = {
		name: {
			given_name: 'Mike',
			surname: 'Juma'
		},
		email_address: "",
		phone: {
			phone_type: "MOBILE",
			phone_number: {
				national_number: "1234567890"
			}
		},
		address: {
			address_line_1: "123 Townsend St",
			address_line_2: "Floor 6",
			admin_area_2: "San Francisco",
			admin_area_1: "CA",
			country_code: "US",
			postal_code: "94107"
		},
		birth_date: "1990-01-01",
		payer_id: "1234567890",
		tax_info: {
			tax_id: "123456789",
			tax_id_type: "BR_CPF"
		}, tenant: '1234567890'
	}

	return (
		<div className='flex items-center flex-col justify-center'>
			<div>
				Pay for ${totalPrice}
			</div>

			<PayPalScriptProvider options={{
				'client-id':
					'ARlD4eYBquW5PAihq6LsSchvHfLyo-7t8-P3wjxyQqVV4NjgcpfQgBkABHqssSs4m3HaA7o72_45b30v'
			}}>
			<PayPalButtons
				style={{ layout: 'vertical' }}
				createOrder={(data, actions) => {
					console.table(data);

					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: '0.01',
									currency_code: 'USD'

								},
								payee,
								items,
							}
						]
					});
				}}
				onApprove={(data, actions) => {
					console.log('Appoved', data);

					return actions.order!.capture().then(function (details) {
						console.log(details);

						alert('Transaction completed by ' + details.payer.name!.given_name);
					});
				}}
			/>
			</PayPalScriptProvider>
		</div>
	);
}


