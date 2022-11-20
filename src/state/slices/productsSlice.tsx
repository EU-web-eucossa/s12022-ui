/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 11:08:54
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductEntityType, ProductsStateType } from '../../types';

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
		loadProductsSuccess: (
			state,
			action: PayloadAction<ProductEntityType[]>
		) => {
			state.products = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadProductsFailure: (
			state,
			action: PayloadAction<Pick<ProductsStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadProductsFailure, loadProductsStart, loadProductsSuccess } =
	productsSlice.actions;

export default productsSlice.reducer;
