import Paypal from '../components/PayPal';
import React from 'react';

const CheckoutPage = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full items-center">
			<div className="">
				<h2 className='font-bold text-3xl'>Checkout</h2>
			</div>
			<div>
				<Paypal />
			</div>
		</div>
	);
};

export default CheckoutPage;
