import cartReducer from '../slices/cartSlice';
import categoriesReducer from './../slices/categoriesSlice';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './../slices/productsSlice';
import storage from 'redux-persist/lib/storage';
import userReducer from './../slices/userSlice';
import whitelistReducer from './../slices/whiteListSlice';

import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist';

const persistConfig = {
	key: 'root-eucossa-app-store-2022-02',
	version: 1,
	storage
};

const rootReducer = persistReducer(
	persistConfig,
	combineReducers({
		user: userReducer,
		cart: cartReducer,
		whiteList: whitelistReducer
	})
);

const store = configureStore({
	reducer: {
		root: rootReducer,
		products: productsReducer,
		categories: categoriesReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
