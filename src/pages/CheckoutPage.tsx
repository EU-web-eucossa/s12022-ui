import Paypal from '../components/PayPal';
import React from 'react';

const CheckoutPage = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="">
				<Paypal />
			</div>
		</div>
	);
};

export default CheckoutPage;
