/* eslint-disable @typescript-eslint/no-explicit-any */
import { CartStateType } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
const initialState: CartStateType = {
	products: [],
	totalPrice: 0,
	totalQuantity: 0
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductToCart: (state, action: PayloadAction<CartStateType>) => {
			const product = action.payload.products[0];
			const productExists = state.products.find(
				(item) => item.name === product.name
			);
			if (productExists) {
				productExists.quantity += product.quantity;
				productExists.price += product.price;
			} else state.products.push(product);

			state.totalPrice += product.price;
			state.totalQuantity += product.quantity;
		},
		increaseProductQuantity: (state, action: PayloadAction<CartStateType>) => {
			const product = action.payload.products[0];
			const productExists = state.products.find(
				(item) => item.name === product.name
			);
			if (productExists) {
				productExists.quantity += 1;
				productExists.price += product.price;
			}
			state.totalPrice += product.price;
			state.totalQuantity += 1;
		},
		removeProductFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.products = state.products.filter(
				(product) => product.name !== action.payload.id
			);
		}
	}
});

export const {
	addProductToCart,
	increaseProductQuantity,
	removeProductFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
