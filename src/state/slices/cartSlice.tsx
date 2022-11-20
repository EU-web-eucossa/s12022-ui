/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 11:08:36
 * @ Description:
 */

/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartStateType } from '../../types';
import { ProductEntityType } from '../../types';
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
			action: PayloadAction<ProductEntityType>
		) => {
			state.cartProducts = state.cartProducts.find(
				(p) => p._id === action.payload._id
			)
				? state.cartProducts.map((p) =>
						p._id === action.payload._id ? { ...p, quantity: p.quantity + 1 } : p
				)
				: [...state.cartProducts, { ...action.payload, quantity: 1 }];
			state.totalPrice = state.cartProducts.reduce(
				(acc, p) => acc + p.price * p.quantity,
				0
			);
			state.totalQuantity = state.cartProducts.length;
		},
		increaseProductQuantity: (state, action: PayloadAction<{ _id: number|string }>) => {
			state.cartProducts = state.cartProducts.map((p) =>
				p._id === action.payload._id ? { ...p, quantity: p.quantity + 1 } : p
			);
			state.totalPrice = state.cartProducts.reduce(
				(acc, p) => acc + p.price * p.quantity,
				0
			);
			state.totalQuantity = state.cartProducts.length;
		},
		removeProductFromCart: (state, action: PayloadAction<{ _id: string|number }>) => {
			state.cartProducts = state.cartProducts.filter(
				(product) => product._id !== action.payload._id
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
