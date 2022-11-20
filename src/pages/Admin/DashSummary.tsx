import { CatCounter } from '../../hooks/CatCounter';
import DashBoardCard from './components/DashBoardCard';
import { ProductcategoryType } from '../../types';
import React from 'react';
import Table from '../../components/Table';
import { useAppSelector } from '../../state/hooks';
import { faFolder, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

type CounterType = {
	name: string;
	category: ProductcategoryType;
	products: number;
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
	React.useEffect(() => {
		getCategoriesCount();
	}, [categories, products]);

	console.log(categoriesCount);

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
			<div>
				<h2>Categories summary</h2>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
					<Table
						className="w-full table-auto shadow-xl bg-white"
						columns={[
							
							{
								columnName: 'Image',
								customElement: true,
								id: 'name',
								title: 'Image',
								_id: 'Image',
								element({ data }) {
									console.log(data);

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
									console.log(data);

									return <p className="text-center">{data.products}</p>;
								}
							}
						]}
						rows={Object.values(categoriesCount).map((category) => ({
							categoryName: category.name,
							products: category.products,
							...category.category
						}))}
					/>
				</div>
			</div>
		</div>
	);
};

export default DashSummary;
