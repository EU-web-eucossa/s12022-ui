/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductCategoriesStateType } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
			action: PayloadAction<Pick<ProductCategoriesStateType, 'categories'>>
		) => {
			state.categories = action.payload.categories;
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
