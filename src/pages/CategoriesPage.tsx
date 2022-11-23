/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-23 15:45:50
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CategoryProductItem from '../components/CategoryProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ProductEntityType } from '../types';
import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../state/hooks';
import { useLocation } from 'react-router-dom';

const CategoriesPage = () => {
	const location = useLocation();
	const [category, setCategory] = React.useState<string | null>('');
	const {
		products: { products },
		categories: { categories }
	} = useAppSelector((state) => state);
	const [filteredProducts, setFilteredProducts] = React.useState<
		ProductEntityType[]
	>([]);
	const getCategoryFromUrl = (url: string) => {
		const urlParams = new URLSearchParams(url);

		return urlParams.get('category');
	};
	React.useEffect(() => {
		return setCategory(getCategoryFromUrl(location.search!));
	}, [location.search]);

	React.useEffect(() => {
		if (category) {
			const filtered = products.filter(
				(p) => categories.find((c) => c.name === category)?._id === p.category
			);
			if (filtered.length > 0) return setFilteredProducts(filtered);

			return setFilteredProducts([]);
		}

		return setFilteredProducts(products);
	}, [category, products]);

	return (
		<div>
			<div className="py-4 flex justify-between items-center">
				<h2 className="flex items-center text-xl capitalize">
					<Link to={'/categories'}>Categories</Link>{' '}
					{category && (
						<span className="flex items-center">
							<FontAwesomeIcon icon={faChevronRight} className="text-[12px]" />{' '}
							<Link to={`/categories?category=${category}`}>{category}</Link>
						</span>
					)}
				</h2>
				<div className="">
					<select
						name=""
						id=""
						className="rounded-md focus:ring-0"
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						<option value="" disabled>----Please select a category-----</option>
						{categories.map((selectedCategory) => (
							<option
								key={category}
								selected={category === selectedCategory.name}
								className={`text-sm text-gray-500 hover:text-gray-700 text-ellipsis ${
									selectedCategory.name === category ? 'text-gray-700' : ''
								}`}
							>
								{selectedCategory.name}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="grid py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
				{filteredProducts.length === 0 ? (
					<div className="h-full flex items-center justify-center flex-col gap-4 text-center">
						<h1 className="font-extrabold text-3xl text-red-600">404</h1>
						<h2 className="">
							No products found in{' '}
							<span className="font-bold text-primary">{category}</span>{' '}
							category
						</h2>
						<p>
							<span className="text-black underline text-xl">
								Please select another category
							</span>
						</p>
					</div>
				) : (
					filteredProducts.map((p) => (
						<CategoryProductItem key={p.name} product={p} />
					))
				)}
			</div>
		</div>
	);
};

export default CategoriesPage;
