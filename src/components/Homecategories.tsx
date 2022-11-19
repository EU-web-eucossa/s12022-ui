import HomecategoryItem from './HomeCategoryItem';
import { Link } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../state/hooks';

const Homecategories = () => {
	const { categories } = useAppSelector((state) => state.categories);

	return (
		<div className="shadow p-4 mt-2 rounded-sm">
			<div className="flex justify-center text-blue-700 underline font-bold py-2 ">
				{/* <h2 className="text-xl font-bold">Categories</h2> */}
				<Link to={'/categories'} className="capitalize text-center">
					View all categories
				</Link>
			</div>
			<div className="flex flex-wrap gap-4 justify-between">
				{categories.length &&
					categories.map((category) => (
						<HomecategoryItem key={category.name} {...category} />
					))}
			</div>
		</div>
	);
};

export default Homecategories;
