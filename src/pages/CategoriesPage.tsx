/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-23 16:35:38
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-24 05:35:12
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CategoryProductItem from '../components/CategoryProductItem';
import FullScreenLoader from '../components/FullScreenLoader';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ProductEntityType } from '../types';
import React from 'react';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../state/hooks';
import { useLocation } from 'react-router-dom';

const CategoriesPage = () => {
	const location = useLocation();
	const [loading, setLoading] = React.useState(true);
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
		try {
			if (category) {
				setLoading(true);
				const filtered = products.filter(
					(p) => categories.find((c) => c.name === category)?._id === p.category
				);
				if (filtered.length > 0) {
					setTimeout(() => {
						setFilteredProducts(filtered);
					}, 1000);
					setLoading(false);
				}

				return setFilteredProducts([]);
			}

			return setFilteredProducts(products);
		} catch (err) {
			// eslint-disable-next-line no-console
		} finally {
			setLoading(false);
		}
	}, [category, products]);

	return loading ? (
		<FullScreenLoader />
	) : (
		<div>
			<div className="py-4 flex justify-between items-center">
				<h2 className="flex items-center text-[12px] capitalize">
					<Link to={'/categories'}>Categories</Link>{' '}
					{/* {category && (
						<span className="flex items-center">
							<FontAwesomeIcon icon={faChevronRight} className="text-[12px]" />{' '}
							<Link to={`/categories?category=${category}`}>{category}</Link>
						</span>
					)} */}
				</h2>
				<div className="text-[12px]">
					<select
						name=""
						id=""
						className="rounded-md focus:ring-0 text-[12px] px-1 py-0.5 max-w-[10rem]"
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						<option value="" disabled className="text-[12px]">
							----Please select a category-----
						</option>
						{categories.map((selectedCategory) => (
							<option
								key={category}
								selected={category === selectedCategory.name}
								className={`text-[12px] text-gray-500 hover:text-gray-700 text-ellipsis ${
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
				{loading?<>Loading...</>:filteredProducts.map((p) => (
					<CategoryProductItem key={p.name} product={p} />
				))}
			</div>
		</div>
	);
};

export default CategoriesPage;
