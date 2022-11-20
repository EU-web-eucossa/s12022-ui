/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 06:21:45
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 11:24:59
 * @ Description:
 */

import { ProductEntityType } from '../../types';
import React from 'react';
import Table from '../../components/Table';
import { axiosQuery } from '../../api';
import { loadProductsSuccess } from '../../state/slices/productsSlice';
import moment from 'moment';
import { ToastContainer,toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../state/hooks';

const ProductList = () => {
	const cols = [
		{
			columnName: 'name',
			customElement: false,
			id: 'name',
			title: 'Product Name'
		},
		{
			columnName: 'image',
			customElement: true,
			id: 'image',
			title: 'Image',
			element: ({ data }: any) => (
				<div className="relative">
					<img
						src={data.featuredImage}
						alt={data.name}
						className="w-30 h-30 object-cover"
					/>
				</div>
			)
		},
		{
			columnName: 'category',
			customElement: true,

			id: 'Category',
			title: 'Category',
			element: ({ data }: any) => (
				<div>
					{categories
						.filter((category: any) => category._id === data.category)
						.map((category: any) => category.name)}
				</div>
			)
		},
		{
			columnName: 'quantity',
			customElement: true,
			id: 'Category',
			title: 'Quantity Name',
			element: ({ data }: any) => (
				<div className="relative">{data.quantity.low}</div>
			)
		},
		{
			columnName: 'inStock',
			customElement: true,
			id: 'Stock',
			title: 'In stock',
			element: ({ data }: any) => (
				<div className="relative">
					{data.inStock ? (
						<div className="bg-green-600 text-white w-fit px-2 rounded-md	">
							Yes
						</div>
					) : (
						'No'
					)}
				</div>
			)
		},
		{
			columnName: 'createdAt',
			customElement: true,
			id: 'Created At',
			title: 'Created at',
			element: ({ data }: any) => (
				<div>{moment(data.createdAt).format('LL')}</div>
			)
		}
	];
	const [products, setProducts] = React.useState<ProductEntityType[]>([]);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [page, setPage] = React.useState<number>(1);
	const [totalPages, setTotalPages] = React.useState<number>(1);
	const [limit, setLimit] = React.useState<number>(20);
	const [totalItems, setTotalItems] = React.useState<number>(0);
	const { categories } = useAppSelector((state) => state.categories);
	const dispatch = useAppDispatch();

	const fetchproducts = async () => {
		setLoading(true);

		try {
			const res = await axiosQuery.get('/products');
			if (res.status === 200) {
				const data = res.data as {
					products: ProductEntityType[];
					page: number;
					limit: number;
					total: number;
				};

				setProducts(data.products);
				setTotalPages(Math.ceil(data.total / data.limit));
				setTotalItems(data.total);
				setPage(data.page);
				setLimit(data.limit);
				dispatch(loadProductsSuccess(data.products));
			}
		} catch (err) {
			toast.error('Error fetching products');
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		fetchproducts();
	}, [page]);

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div>
					<ToastContainer />
					<div className="overflow-x-scroll">
						<Table
							className=" table-fixed w-full border-collapse border-2 shadow p-2 text-left overflow-x-scroll"
							columns={cols}
							rows={products}
						/>
					</div>
					<div className="flex justify-between ">
						<button
							disabled={totalPages === 1 || page === 1}
							onClick={() => setPage(page - 1)}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
						>
							Prev
						</button>
						<div className="mx-2 flex items-center gap-4">
							<span className="text-gray-500">
								Displaying {products.length} of {totalItems} items
							</span>
							<span className="text-black border border-slate-400 rounded px-2">
								Max items {limit}
							</span>
						</div>
						<button
							disabled={totalPages === 1 || page === totalPages}
							onClick={() => setPage(page + 1)}
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
						>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductList;
