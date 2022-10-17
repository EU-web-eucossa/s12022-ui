/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserStateType } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserStateType = {
	isAuthenticated: false,
	user: undefined,
	loading: false,
	error: null
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<UserStateType>) => {
			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logoutUser: (state) => {
			state.isAuthenticated = initialState.isAuthenticated;
			state.user = initialState.user;
		}
	}
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
