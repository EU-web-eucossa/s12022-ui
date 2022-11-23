/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @ Author: Felix Orinda
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-23 14:53:22
 * @ Modified time: 2022-11-23 15:36:24
 * @ Description:
 */

import EditProduct from './EditProduct';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ProductEntityType } from '../../types';
import React from 'react';
import Table from '../../components/Table';
import { axiosQuery } from '../../api';
import { loadProductsSuccess } from '../../state/slices/productsSlice';
import moment from 'moment';

import { ToastContainer, toast } from 'react-toastify';
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
		},
		{
			columnName: 'Edit',
			customElement: true,
			id: 'Edit',
			title: 'Edit',
			element: ({ data }: any) => (
				<div>
					<button
						className="bg-blue-600 text-white px-2 rounded-md"
						onClick={() => {
							setEditing(true);
							setEditingData(data);
						}}
					>
						Edit
					</button>
				</div>
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

	const [editing, setEditing] = React.useState<boolean>(false);
	// const [editingId, setEditingId] = React.useState<string>('');
	const [editingData, setEditingData] = React.useState<ProductEntityType>();

	const fetchproducts = async () => {
		setLoading(true);

		try {
			const res = await axiosQuery.get('/products', {
				params: {
					page,
					limit: 200
				}
			});
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

	const toggleEdit = () => {
		console.log('toggle edit');
		
		setEditing(false);
	};
	React.useEffect(() => {
		fetchproducts();
	}, [page]);

	return (
		<div>
			{loading ? (
				<FullScreenLoader />
			) : (
				<div>
					<ToastContainer />
					{/* Edit overlay */}
					{editing && (
						<div className="fixed overflow-hidden top-0 left-0 w-screen min-h-screen bg-black bg-opacity-80 z-[2000]">
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-fit bg-white rounded-md">
								<div className="flex justify-between items-center px-4 py-2">
									<h1 className="text-xl font-semibold py-4 text-center">Edit Product</h1>
									<button
										onClick={() => {
											setEditing(false);
											setEditingData({} as ProductEntityType);
										}}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
								<div className="px-4 py-2 overflow-auto h-fit">
									{editingData && <EditProduct toggleEdit={toggleEdit} product={editingData} />}
								</div>
							</div>
						</div>
					)}

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
