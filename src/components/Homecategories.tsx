/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-26 08:50:45
 * @ Description:
 */

import HomecategoryItem from './HomeCategoryItem';
import React from 'react';
import { useAppSelector } from '../state/hooks';

const Homecategories = () => {
	const { categories } = useAppSelector((state) => state.categories);

	return (
		<div className="shadow mt-2 rounded-sm">
			<div className="flex justify-center text-blue-700 underline font-bold py-2 ">
				{/* <Link to={'/categories'} className="capitalize text-center">
					View all categories
				</Link> */}
			</div>
			<div className="bg-slate-200 grid p-2 gap-2 grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] md:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
				{categories.length &&
					categories.map((category) => (
						<HomecategoryItem key={category.name} {...category} />
					))}
			</div>
		</div>
	);
};

export default Homecategories;
