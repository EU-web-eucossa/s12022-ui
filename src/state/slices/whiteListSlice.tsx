import { IProduct } from '../../types';
import { WhiteListStateType } from '../../types';
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
					p.id ===
					p.id
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
					p.id !==
					action.payload.id
			);
		}
	}
});

export const { addProductToWhitelist,removeProductFromWhitelist } = productWhitelistSlice.actions;

export default productWhitelistSlice.reducer;
