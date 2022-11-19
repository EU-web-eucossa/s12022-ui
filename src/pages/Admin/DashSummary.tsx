import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { useAppSelector } from '../../state/hooks';
import { faFolder, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const DashSummary = () => {
	const {
		categories: { categories },
		products: { products }
	} = useAppSelector((state) => state);

	return (
		<div>
			<h1>Dashboard</h1>
			<div className="flex gap-2 flex-wrap">
				<DashBoardCard
					title="Categories"
					value={categories.length}
					icon={faFolder}
				/>
				<DashBoardCard
					title="Products"
					value={products.length}
					icon={faShoppingBag}
				/>
			</div>
		</div>
	);
};

export default DashSummary;

type DashBoardCardProps = {
	title: string;
	value: number;
	icon?: IconDefinition;
};
const DashBoardCard = ({ title, value, icon }: DashBoardCardProps) => {
	return (
		<div className="flex items-center justify-center  bg-white rounded-md p-4">
			<div className="flex  flex-col border-r px-4  gap-5 font-medium">
				{icon && <FontAwesomeIcon icon={icon} className="text-4xl text-primary" />}
				<h3 className="text-lg">{title}</h3>
			</div>
			<h2 className="text-5xl px-2 font-extrabold">{value}</h2>
		</div>
	);
};
