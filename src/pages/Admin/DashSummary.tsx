/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 06:15:35
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-23 14:06:57
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CatCounter } from '../../hooks/CatCounter';
import DashBoardCard from './components/DashBoardCard';
import { ProductcategoryType } from '../../types';
import React from 'react';
import { useAppSelector } from '../../state/hooks';

import { faFolder, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

type CounterType = {
	name: string;
	category: ProductcategoryType;
	products: number;
};

type CatCountType = {
	categoryName: string;
	createdAt: string;
	description: string;
	image: string;
	name: string;
	products: number;
	updatedAt: string;
	_id: string;
};

const DashSummary = () => {
	const {
		categories: { categories },
		products: { products }
	} = useAppSelector((state) => state);
	const [categoriesCount, setcategoriesCount] = React.useState<{
		[key: string]: CounterType;
	}>({});

	function getCategoriesCount() {
		categories.forEach((category) => {
			const { category: cat, products: count } = CatCounter({
				products,
				categories,
				categoryId: category._id
			});

			setcategoriesCount((prev) => ({
				...prev,
				[category.name]: {
					name: category.name,
					category: cat!,
					products: count
				}
			}));
		});
	}
	const [categoriesCountArray, setcategoriesCountArray] = React.useState<
		CatCountType[]
	>([]);

	React.useEffect(() => {
		getCategoriesCount();
	}, [categories, products]);

	React.useEffect(() => {
		setcategoriesCountArray(
			(Object.values(categoriesCount) as unknown as any[])
				.map((category) => ({
					categoryName: category.name,
					products: category.products,
					...category.category
				}))
				.sort((a, b) => a.products - b.products) as unknown as CatCountType[]
		);
	}, [categoriesCount]);

	const productCountColorValue = (value: number) => {
		if (value > 15) return 'text-green-400';
		if (value >= 10) return 'text-orange-400';
		if (value > 5) return 'text-brown-400';

		return 'text-red-400';
	};

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
			<div className="py-10">
				<h2>Categories summary</h2>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
					{/* <Table
						className="w-full table-auto shadow-xl bg-white"
						columns={[
							
							{
								columnName: 'Image',
								customElement: true,
								id: 'name',
								title: 'Image',
								_id: 'Image',
								element({ data }) {

									return (
										<img
											src={data.image}
											alt=""
											className="h-8 w-8 object-scale-down rounded-full"
										/>
									);
								}
							},{
								columnName: 'categoryName',
								customElement: true,
								id: 'name',
								title: 'Category',
								_id: 'name',
								element({ data }) {
									return <p>{data.name}</p>;
								}
							},
							{
								columnName: 'products',
								customElement: true,
								id: 'name',
								title: 'Quantity of products available',
								_id: 'Image',
								element({ data }) {
									return <p className="text-center">{data.products}</p>;
								}
							}
						]}
						rows={Object.values(categoriesCount).map((category) => ({
							categoryName: category.name,
							products: category.products,
							...category.category
						}))}
					/> */}
					<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
						{categoriesCountArray.length > 0 ? (
							categoriesCountArray.map((category) => (
								<div
									className="flex items-center w-full bg-white p-4 rounded-md gap-4 justify-between"
									key={category._id}
								>
									<div className="flex flex-col justify-between items-stretch gap-4">
										<img
											src={category.image}
											alt=""
											className="h-8 w-8 object-scale-down rounded-full"
										/>
										<p className="text-[12px]">{category.name}</p>
									</div>
									<p
										className={`text-center ${productCountColorValue(
											category.products
										)} font-bold text-5xl`}
									>
										{category.products}
									</p>
								</div>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashSummary;
