/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CategoryProductItem from '../components/CategoryProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../state/hooks';
import { useLocation } from 'react-router-dom';

const CategoriesPage = () => {
	const location = useLocation();
	const [category, setCategory] = React.useState<string | null>('');
	const { products } = useAppSelector((state) => state.products);
	const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>(
		[]
	);
	const getCategoryFromUrl = (url: string) => {
		const urlParams = new URLSearchParams(url);

		return urlParams.get('category');
	};
	React.useEffect(() => {
		return setCategory(getCategoryFromUrl(location.search!));
	}, [location.search]);

	React.useEffect(() => {
		if (category) {
			const filtered = products.filter((p) => p.category === category);
			if (filtered.length > 0) return setFilteredProducts(filtered);

			return setFilteredProducts([]);
		}

		return setFilteredProducts(products);
	}, [category, products]);

	return (
		<div>
			<div className="py-4">
				<h2 className="flex items-center text-xl capitalize">
					Categories{' '}
					{category && (
						<span className="flex items-center">
							<FontAwesomeIcon icon={faChevronRight} className="text-[12px]" />{' '}
							{category}
						</span>
					)}
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
				{filteredProducts.map((p) => (
					<CategoryProductItem key={p.title} product={p} />
				))}
			</div>
		</div>
	);
};

export default CategoriesPage;
