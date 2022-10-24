import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeproductItem from './HomeproductItem';
import { IProduct } from '../interfaces/product';
import { Link } from 'react-router-dom';
import React from 'react';
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HomeProductCategoriesRow = ({
	category,
	products
}: {
	category: string;
	products: IProduct[];
}) => {
	const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>(
		[]
	);
	const [categoryName, setCategoryName] = React.useState<string>('');

	React.useEffect(() => {
		setCategoryName(category);
		const fp = products.filter((product) => {
			return product.category === category;
		});
		setFilteredProducts(fp);
	}, [products, category]);

	return filteredProducts.length > 0 ? (
		<div className='shadow-lg'>
			<div className="flex items-center py-4 px-6 text-black bg-orange-300 rounded-sm justify-between">
				<h2 className="text-md font-medium capitalize flex items-center">Categories<FontAwesomeIcon icon={faChevronRight} className="text-[10px]"/>{categoryName}</h2>
				<Link to={`/categories?category=${categoryName}`} className="flex items-center gap-1 hover:text-white">View All <FontAwesomeIcon icon={faChevronRight} className="text-[10px]"/></Link>
			</div>
			<div className="w-full p-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-2">
				{filteredProducts.slice(0,4).map((product) => (
					<HomeproductItem key={product.title} {...product} />
				))}
			</div>
		</div>
	) : (
		<></>
	);
};

export default HomeProductCategoriesRow;
