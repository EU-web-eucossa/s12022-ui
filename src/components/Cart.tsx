import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
	clearCart,
	increaseProductQuantity,
	removeProductFromCart
} from '../state/slices/cartSlice';
import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../state/hooks';

const Cart = () => {
	const dispatch = useAppDispatch();
	const { cartProducts, totalQuantity, totalPrice } = useAppSelector(
		(state) => state.root.cart
	);

	return (
		<div className="w-screen p-10 top-0 overflow-hidden h-screen left-0 bg-black bg-opacity-80 fixed  z-[2000] flex items-center justify-center">
			<div
				className="max-w-[20rem] md:max-w-2xl w-full p-8 min-h-[25rem] md:p-12 bg-white z-[1020] top-[3rem] shadow-md border border-slate-200 right-0  max-h-[30rem] rounded"
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
				}}
			>
				{totalQuantity > 0 && (
					<h2 className="my-4 text-center text-primary border-b">
						Your cart has {totalQuantity} item(s)
					</h2>
				)}
				{totalQuantity > 0 ? (
					<ul className="flex flex-col gap-1 max-h-[18rem] overflow-y-scroll scroll-bar py-4 border px-1">
						{cartProducts.map((p) => (
							<li key={p.title} className="flex gap-2 w-full">
								<div>
									<img src={p.thumbnail} alt="" className="w-24 h-24 mx-auto md:h-48 md:w-48 object-cover" />
								</div>
								<div className="text-[12px] flex flex-col gap-1 w-full border p-1">
									<h1 className="capitalize">{p.title}</h1>
									<p>Quatity {p.quantity}</p>
									<p>Unit price ${p.price.toFixed(2)}</p>
									<p>Total $ {(p.price * p.quantity).toFixed(2)}</p>
									<div className="flex gap-2 w-full border-t p-2">
										<FontAwesomeIcon
											icon={faAdd}
											className="flex-[1] text-primary text-lg border-r"
											onClick={(e) => {
												e.preventDefault();
												dispatch(
													increaseProductQuantity({
														id: p.id
													})
												);
											}}
										/>
										<FontAwesomeIcon
											icon={faTrash}
											className="flex-[1] text-lg text-error border-l"
											onClick={(e) => {
												e.preventDefault();
												dispatch(
													removeProductFromCart({
														id: p.id
													})
												);
											}}
										/>
									</div>
								</div>
							</li>
						))}
					</ul>
				) : (
					<div className=" text-center text-primary border-b">
						Cart is empty
					</div>
				)}
				{totalPrice > 0 && (
					<div className="font-medium text-md px-2 mt-4">
						Total: $ {totalPrice.toFixed(2)}
					</div>
				)}

				{totalQuantity > 0 && (
					<div className="my-2 flex gap-4">
						<button
							className="bg-error text-white font-medium rounded px-4 w-fit"
							onClick={(e) => {
								e.preventDefault();
								dispatch(clearCart());
							}}
						>
							Reset cart
						</button>
						<button className='bg-primary text-white rounded-md px-4 capitalize'>checkout</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
