/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CategoryProductItem from '../components/CategoryProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../state/hooks';
import { useLocation } from 'react-router-dom';

const CategoriesPage = () => {
	const location = useLocation();
	const [category, setCategory] = React.useState<string | null>('');
	const { products } = useAppSelector((state) => state.products);
	const getCategoryFromUrl = (url: string) => {
		const urlParams = new URLSearchParams(url);

		return urlParams.get('category');
	};
	React.useEffect(() => {
		return setCategory(getCategoryFromUrl(location.search!));
	}, [location.search]);

	return (
		<div>
			<div className='py-4'>
				<h2 className='flex items-center text-xl capitalize'>
					Categories{' '}
					{category && (
						<span className='flex items-center'>
							<FontAwesomeIcon icon={faChevronRight} className='text-[12px]' /> {category}
						</span>
					)}
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
				{products.filter(prod => prod.category === category).map((p) => (
					<CategoryProductItem key={p.name} product={p} />
				))}
			</div>
		</div>
	);
};

export default CategoriesPage;
