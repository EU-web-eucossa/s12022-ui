/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartStateType } from '../../types';
import { IProduct } from '../../types';
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
				(p) => p.id === action.payload.id
			)
				? state.cartProducts.map((p) =>
						p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
				)
				: [...state.cartProducts, { ...action.payload, quantity: 1 }];
			state.totalPrice = state.cartProducts.reduce(
				(acc, p) => acc + p.price * p.quantity,
				0
			);
			state.totalQuantity = state.cartProducts.length;
		},
		increaseProductQuantity: (state, action: PayloadAction<{ id: number|string }>) => {
			state.cartProducts = state.cartProducts.map((p) =>
				p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
			);
			state.totalPrice = state.cartProducts.reduce(
				(acc, p) => acc + p.price * p.quantity,
				0
			);
			state.totalQuantity = state.cartProducts.length;
		},
		removeProductFromCart: (state, action: PayloadAction<{ id: string|number }>) => {
			state.cartProducts = state.cartProducts.filter(
				(product) => product.id !== action.payload.id
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
