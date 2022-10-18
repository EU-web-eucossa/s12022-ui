import { IProduct } from '../../interfaces/product';
import { WhiteListStateType } from '../../types';
import slugify from '../../helpers/slugify';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: WhiteListStateType = {
	products: []
};

const productWhitelistSlice = createSlice({
	name: 'whitelist',
	initialState,
	reducers: {
		addProductToWhitelist: (state, action: PayloadAction<IProduct>) => {
			state.products = state.products.find(
				(p) =>
					slugify(p.name).toLowerCase() ===
					slugify(action.payload.name).toLowerCase()
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
					slugify(p.name).toLowerCase() !==
					slugify(action.payload.id).toLowerCase()
			);
		}
	}
});

export const { addProductToWhitelist,removeProductFromWhitelist } = productWhitelistSlice.actions;

export default productWhitelistSlice.reducer;
