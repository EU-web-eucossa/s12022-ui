import AppRouter from './router';
import React from 'react';
import allProducts from './data/products';
import { loadProductsSuccess } from './state/slices/productsSlice';
import { useAppDispatch } from './state/hooks';

const App = () => {
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		dispatch(
			loadProductsSuccess({
				products: allProducts,
				loading: false,
				error: null
			})
		);
	}, []);

	return <AppRouter />;
};

export default App;
