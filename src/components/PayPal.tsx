/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable camelcase */
import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function Paypal() {
	return (
		<PayPalScriptProvider options={{ 'client-id': 'test' }}>
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
