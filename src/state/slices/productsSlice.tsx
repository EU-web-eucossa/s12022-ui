/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductsStateType } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ProductsStateType = {
	products: [],
	loading: false,
	error: null
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		loadProductsStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadProductsSuccess: (state, action: PayloadAction<ProductsStateType>) => {
			state.products = action.payload.products;
			state.loading = false;
			state.error = null;
		},
		loadProductsFailure: (state, action: PayloadAction<ProductsStateType>) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadProductsFailure, loadProductsStart, loadProductsSuccess } =
	productsSlice.actions;

export default productsSlice.reducer;
