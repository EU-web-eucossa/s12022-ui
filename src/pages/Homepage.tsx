import HomeProductCategoriesRow from '../components/HomeProductCategoriesRow';
import Homecategories from '../components/Homecategories';
import ProductsLoader from '../components/ProductsLoader';
import React from 'react';
import { useAppSelector } from '../state/hooks';

const Homepage = () => {
	const {
		categories: { categories },
		products: { products,loading }
	} = useAppSelector((state) => state);

	console.log('categories home', categories);
	
	return loading ? (
		<ProductsLoader/>
	) : (
		<div>
			<Homecategories />
			<div className="flex flex-col gap-6">
				{categories.length &&
					// products.length &&
					categories.map((category) => (
						<HomeProductCategoriesRow
							key={category.name}
							category={category.name}
							products={products}
						/>
					))}
			</div>
		</div>
	);
};

export default Homepage;
