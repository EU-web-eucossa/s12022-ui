/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 21:47:02
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function Paypal() {
	const initialOptions = {
		'client-id':
			'ARlD4eYBquW5PAihq6LsSchvHfLyo-7t8-P3wjxyQqVV4NjgcpfQgBkABHqssSs4m3HaA7o72_45b30v',
		currency: 'USD',
		intent: 'capture',
		'data-client-token': 'abc123xyz=='
	};

	return (
		<PayPalScriptProvider
			options={{
				'client-id':
					'ARlD4eYBquW5PAihq6LsSchvHfLyo-7t8-P3wjxyQqVV4NjgcpfQgBkABHqssSs4m3HaA7o72_45b30v'
			}}
			// options={initialOptions}
		>
			<PayPalButtons
				style={{ layout: 'vertical' }}
				createOrder={(data, actions) => {

					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: '0.01'
								}
							}
						]
					});
				}}
				onApprove={(data, actions) => {

					return actions.order!.capture().then(function (details) {
						alert('Transaction completed by ' + details.payer.name!.given_name);
					});
				}}
			/>
		</PayPalScriptProvider>
	);
}
