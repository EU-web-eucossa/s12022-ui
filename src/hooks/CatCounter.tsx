// import React from 'react';
import { ProductEntityType, ProductcategoryType } from '../types';
// import { useAppSelector } from '../../../state/hooks';

export const CatCounter = ({
	products,
	categoryId,
	categories
}: {
	products: ProductEntityType[];
	categories: ProductcategoryType[];
	categoryId: string;
}) => {
	const filteredProducts = products.filter(
		(product) => product.category === categoryId
	);
	const category = categories.find((category) => category._id === categoryId);

	return {
		category,
		products: filteredProducts.length
	};
	// return (
	// 	<div className="flex items-center justify-betweeen  bg-white rounded-md p-2">
	// 		<div className="flex  flex-col items-center border-r px-4  gap-5 font-medium flex-1">
	// 			<img
	// 				src={category?.image}
	// 				alt=""
	// 				className="w-12 h-12 object-scale-down rounded-full"
	// 			/>
	// 			<h3 className="text-sm">{category?.name}</h3>
	// 		</div>
	// 		<h2 className="text-2xl px-2 font-extrabold">
	// 			{filteredProducts.length}
	// 		</h2>
	// 	</div>
};

