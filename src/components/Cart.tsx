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
		<div
			className="w-[20rem] sm:w-80 bg-white z-[1020] absolute top-[3rem] shadow-md border border-slate-200 right-0 p-3 max-h-[30rem] rounded"
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
			}}
		>
			{totalQuantity > 0 && (
				<h2 className="my-4 text-center text-primary border-b">Your cart has {totalQuantity} item(s)</h2>
			)}
			{totalQuantity > 0 ? (
				<ul className="flex flex-col gap-1 max-h-[20rem] overflow-y-scroll scroll-bar py-4 border px-1">
					{cartProducts.map((p) => (
						<li key={p.title} className="flex gap-2 w-full">
							<div>
								<img src={p.thumbnail} alt="" className="w-20 h-20" />
							</div>
							<div className="text-[12px] flex flex-col gap-1 w-full">
								<h1 className="capitalize">{p.title}</h1>
								<p>Quatity {p.quantity}</p>
								<p>Ksh {(p.price * p.quantity).toFixed(2)}</p>
								<div className="flex gap-2 w-full">
									<FontAwesomeIcon
										icon={faAdd}
										className="flex-[1] text-primary text-lg"
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
										className="flex-[1] text-lg text-error"
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
				<div className="">Cart is empty</div>
			)}
			<div className="font-medium text-md px-2 mt-4">
				Total: $ {totalPrice.toFixed(2)}
			</div>

			<div className="my-2">
				<button
					className="bg-error text-white font-medium w-full rounded"
					onClick={(e) => {
						e.preventDefault();
						dispatch(clearCart());
					}}
				>
					Reset cart
				</button>
			</div>
		</div>
	);
};

export default Cart;
