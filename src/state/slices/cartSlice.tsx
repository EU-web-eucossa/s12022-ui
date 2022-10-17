/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartStateType } from '../../types';
import { IProduct } from '../../interfaces/product';
import slugify from '../../helpers/slugify';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
const initialState: CartStateType = {
	cartProducts: [],
	totalPrice: 0,
	totalQuantity: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (
			state: CartStateType,
			action: PayloadAction<IProduct>
		) => {
			state.cartProducts = state.cartProducts.find(
				(p) =>
					slugify(p.name).toLowerCase() ===
					slugify(action.payload.name).toLowerCase()
			)
				? state.cartProducts.map((p) =>
						slugify(p.name).toLowerCase() ===
						slugify(action.payload.name).toLowerCase()
							? { ...p, quantity: p.quantity + 1 }
							: p
				)
				: [...state.cartProducts, { ...action.payload, quantity: 1 }];
			state.totalPrice = state.cartProducts.reduce(
				(acc, p) => acc + p.price * p.quantity,
				0
			);
			state.totalQuantity = state.cartProducts.length;
		},
		increaseProductQuantity: (state, action: PayloadAction<{ id: string }>) => {
			state.cartProducts = state.cartProducts.map((p) =>
				slugify(p.name).toLowerCase() === action.payload.id
					? { ...p, quantity: p.quantity + 1 }
					: p
			);
			state.totalPrice = state.cartProducts.reduce(
				(acc, p) => acc + p.price * p.quantity,
				0
			);
			state.totalQuantity = state.cartProducts.length;
		},
		removeProductFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.cartProducts = state.cartProducts.filter(
				(product) =>
					slugify(product.name).toLowerCase() !==
					slugify(action.payload.id).toLowerCase()
			);
			state.totalPrice = state.cartProducts.reduce(
				(acc, p) => acc + p.price * p.quantity,
				0
			);
			state.totalQuantity = state.cartProducts.length;
		},
		clearCart: (state) => {
			state.cartProducts = [];
			state.totalPrice = 0;
			state.totalQuantity = 0;
		}
	}
});

export const {
	addProductToCart,
	increaseProductQuantity,
	removeProductFromCart,
	clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
