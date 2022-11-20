/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import MapRouter from 'react-router-map';
import OfflineComponent from './components/OfflineComponent';
import React from 'react';
import { axiosQuery } from './api';
import routes from './router';
import { useAppDispatch } from './state/hooks';
import useOnline from './hooks/useOnline';
import {
	loadCategoryFailure,
	loadCategoryStart,
	loadCategorySuccess
} from './state/slices/categoriesSlice';
import {
	loadProductsFailure,
	loadProductsStart,
	loadProductsSuccess
} from './state/slices/productsSlice';

const App = () => {
	const { online } = useOnline();
	const dispatch = useAppDispatch();
	const fetchProducts = async () => {
		try {
			dispatch(loadProductsStart());
			const response = await axiosQuery.get('/products',{
				params: {
					page: 1,
					limit: 200
				}
			});
			const data = response.data.products;
			data && data.length
				? dispatch(loadProductsSuccess(data))
				: dispatch(loadProductsSuccess([])); //
		} catch (error: any) {
			if (error instanceof AxiosError)
				dispatch(loadProductsFailure({ error: error.response?.data }));
		}
	};
	const fetchProductCategories = async () => {
		try {
			dispatch(loadCategoryStart());
			const response = await axiosQuery.get('/categories');
			const data = response.data.categories;
			data
				? dispatch(loadCategorySuccess(data))
				: dispatch(loadCategoryFailure({ error: 'No categories found' }));

			dispatch(loadCategorySuccess(data));
		} catch (error: any) {
			if (error instanceof AxiosError)
				dispatch(loadCategoryFailure({ error: error.response?.data }));
		}
	};
	React.useEffect(() => {
		fetchProductCategories();
		fetchProducts();
	}, []);

	return online ? (
		<MapRouter routes={routes} topScroll />
	) : (
		<OfflineComponent />
	);
};

export default App;
