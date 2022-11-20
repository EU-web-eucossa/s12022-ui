import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

type DashBoardCardProps = {
	title: string;
	value: number;
	icon?: IconDefinition;
};

const DashBoardCard = ({ title, value, icon }: DashBoardCardProps) => {
	return (
		<div className="flex items-center justify-center  bg-white rounded-md p-4">
			<div className="flex  flex-col border-r px-4  gap-5 font-medium">
				{icon && (
					<FontAwesomeIcon icon={icon} className="text-4xl text-primary" />
				)}
				<h3 className="text-lg">{title}</h3>
			</div>
			<h2 className="text-5xl px-2 font-extrabold">{value}</h2>
		</div>
	);
};

export default DashBoardCard;
