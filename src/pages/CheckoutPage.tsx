import { Link } from 'react-router-dom';
import Paypal from '../components/PayPal';
import React from 'react';

const CheckoutPage = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="">
				<Paypal />
				<div className="text-center text-blue-600 underline">
					<Link to={'/'}>Continue shopping</Link>
				</div>
			</div>
		</div>
	);
};

export default CheckoutPage;
