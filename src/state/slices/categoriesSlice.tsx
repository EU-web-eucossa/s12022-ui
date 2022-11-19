/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 07:33:13
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductCategoriesStateType, ProductcategoryType } from '../../types';

const initialState: ProductCategoriesStateType = {
	categories: [],
	loading: false,
	error: null
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		loadCategoryStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loadCategorySuccess: (
			state,
			action: PayloadAction<ProductcategoryType[]>
		) => {
			state.categories = action.payload;
			state.loading = false;
			state.error = null;
		},
		loadCategoryFailure: (
			state,
			action: PayloadAction<Pick<ProductCategoriesStateType, 'error'>>
		) => {
			state.loading = false;
			state.error = action.payload.error;
		}
	}
});

export const { loadCategoryFailure, loadCategoryStart, loadCategorySuccess } =
	categoriesSlice.actions;

export default categoriesSlice.reducer;
