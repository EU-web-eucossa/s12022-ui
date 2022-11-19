/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserStateType } from '../../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserStateType = {
	isAuthenticated: false,
	user: undefined,
	token: null,
	loading: false,
	error: null
};

type PickPayload='user'|'token'

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginUser: (state, action: PayloadAction<Pick<UserStateType,PickPayload>>) => {
			state.isAuthenticated = true;
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		logoutUser: (state) => {
			state.isAuthenticated = initialState.isAuthenticated;
			state.user = initialState.user;
		}
	}
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
