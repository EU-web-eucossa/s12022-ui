import HomeProductCategoriesRow from '../components/HomeProductCategoriesRow';
import Homecategories from '../components/Homecategories';
import React from 'react';
import { useAppSelector } from '../state/hooks';

const Homepage = () => {
	const {
		categories: { categories },
		products: { products }
	} = useAppSelector((state) => state);

	return (
		<div>
			<Homecategories />
			<div className="flex flex-col gap-6">
				{categories.length &&
					products.length &&
					categories.map((category) => (
						<HomeProductCategoriesRow
							key={category}
							category={category}
							products={products}
						/>
					))}
			</div>
		</div>
	);
};

export default Homepage;
