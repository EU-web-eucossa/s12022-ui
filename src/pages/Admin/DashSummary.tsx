/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 06:15:35
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-23 22:18:14
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CatCounter } from '../../hooks/CatCounter';
import DashBoardCard from './components/DashBoardCard';
import { ProductcategoryType } from '../../types';
import React from 'react';
import { useAppSelector } from '../../state/hooks';

// import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';
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
				{/* <AreaChart
					width={1230}
					height={450}
					data={categoriesCountArray}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
						<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" />
					<YAxis />
					<CartesianGrid strokeDasharray="3 3" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="products"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#colorUv)"
					/>
					<Area
						type="monotone"
						dataKey="name"
						stroke="#82ca9d"
						fillOpacity={1}
						fill="url(#colorPv)"
					/>
				</AreaChart> */}
				{/* <RadarChart outerRadius={200} width={730} height={550} data={categoriesCountArray}>
					<PolarGrid />
					<PolarAngleAxis dataKey="name" />
					<PolarRadiusAxis angle={90} domain={[1, 15]} />
					<Radar
						name="Name"
						dataKey="name"
						stroke="#8884d8"
						fill="#8884d8"
						fillOpacity={0.6}
					/>
					<Radar
						name="Products"
						dataKey="products"
						stroke="#82ca9d"
						fill="#82ca9d"
						fillOpacity={0.6}
					/>
					<Legend />
				</RadarChart> */}
				<BarChart width={1200} height={450} data={categoriesCountArray}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="products" fill="#8884d8" />
					<Bar dataKey="uv" fill="#82ca9d" />
				</BarChart>
			</div>
		</div>
	);
};

export default DashSummary;
