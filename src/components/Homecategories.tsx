import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomecategoryItem from './HomecategoryItem';
import { Link } from 'react-router-dom';
import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Homecategories = () => {
	return (
		<div className="shadow p-4 mt-2 rounded-sm">
			<div className="flex justify-between py-2 ">
				<h2 className="text-xl font-bold">Categories</h2>
				<Link to={'/categories'} className="capitalize">
					view all <FontAwesomeIcon icon={faChevronRight} />
				</Link>
			</div>
			<div className="flex gap-4 overflow-x-scroll no-scrollbar">
				{[
					'clothes',
					'shoes',
					'sports-wear',
					'airpods',
					'smartphones',
					'smart watch',
					'television',
					'speakers',
					'headphones'
				].map((c) => (
					<HomecategoryItem key={c} title={c} />
				))}
			</div>
		</div>
	);
};

export default Homecategories;
