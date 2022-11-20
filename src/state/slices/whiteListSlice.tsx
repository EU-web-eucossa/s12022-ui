/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 11:09:29
 * @ Description:
 */

import { ProductEntityType } from '../../types';
import { WhiteListStateType } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: WhiteListStateType = {
	products: []
};

const productWhitelistSlice = createSlice({
	name: 'whitelist',
	initialState,
	reducers: {
		addProductToWhitelist: (state, action: PayloadAction<ProductEntityType>) => {
			state.products = state.products.find(
				(p) =>
					p._id ===
					p._id
			)
				? state.products
				: [...state.products, action.payload];
		},
		removeProductFromWhitelist: (
			state,
			action: PayloadAction<{ id: string }>
		) => {
			state.products = state.products.filter(
				(p) =>
					p._id !==
					action.payload.id
			);
		}
	}
});

export const { addProductToWhitelist,removeProductFromWhitelist } = productWhitelistSlice.actions;

export default productWhitelistSlice.reducer;
