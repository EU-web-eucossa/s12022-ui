import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import slugify from '../helpers/slugify';
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
			className="w-screen sm:w-80 bg-white z-[1020] absolute top-[3rem] shadow-md border border-slate-200 right-0 p-3 max-h-[30rem] overflow-y-scroll rounded"
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
			}}
		>
			{totalQuantity > 0 ? (
				<ul className="flex flex-col gap-1">
					{cartProducts.map((p) => (
						<li key={p.name} className="flex gap-2">
							<div>
								<img src={p.featuredImage} alt="" className="w-20 h-20" />
							</div>
							<div className="text-[12px] flex flex-col gap-1">
								<h1 className="capitalize">{p.name}</h1>
								<p>Quatity {p.quantity}</p>
								<p>Ksh {(p.price * p.quantity).toFixed(2)}</p>
								<div className="flex gap-2">
									<FontAwesomeIcon
										icon={faAdd}
										className="flex-[1]"
										onClick={(e) => {
											e.preventDefault();
											dispatch(
												increaseProductQuantity({
													id: slugify(p.name).toLowerCase()
												})
											);
										}}
									/>
									<FontAwesomeIcon
										icon={faTrash}
										className="flex-[1]"
										onClick={(e) => {
											e.preventDefault();
											dispatch(
												removeProductFromCart({
													id: slugify(p.name).toLowerCase()
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
			<div className="font-medium text-md px-2">Total: Ksh {totalPrice.toFixed(2)}</div>

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
