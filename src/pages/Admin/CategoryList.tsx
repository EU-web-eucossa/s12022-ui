/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 06:21:37
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 11:58:48
 * @ Description:
 */

import FullScreenLoader from '../../components/FullScreenLoader';
import { ProductcategoryType } from '../../types';
import React from 'react';
import Table from '../../components/Table';
import { axiosQuery } from '../../api';
import { loadCategorySuccess } from '../../state/slices/categoriesSlice';
import moment from 'moment';
import { useAppDispatch } from '../../state/hooks';
import { ToastContainer, toast } from 'react-toastify';
const CategoryList = () => {
	const [categories, setCategories] = React.useState<ProductcategoryType[]>([]);
	const [loading, setLoading] = React.useState<boolean>(false);
	const [page, setPage] = React.useState<number>(1);
	const [totalPages, setTotalPages] = React.useState<number>(1);
	const [limit, setLimit] = React.useState<number>(20);
	const [totalItems, setTotalItems] = React.useState<number>(0);

	const dispatch = useAppDispatch();
	const fetchCategories = async () => {
		setLoading(true);

		try {
			const res = await axiosQuery.get('/categories', {
				params: {
					page,
					limit: 200
				}
			});
			if (res.status === 200) {
				const data = res.data as {
					categories: ProductcategoryType[];
					page: number;
					limit: number;
					total: number;
				};

				setCategories(data.categories);
				setTotalPages(Math.ceil(data.total / data.limit));
				setTotalItems(data.total);
				setPage(data.page);
				setLimit(data.limit);
				dispatch(loadCategorySuccess(data.categories));
			}
		} catch (err) {
			toast.error('Error fetching categories');
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		fetchCategories();
	}, [page]);

	return (
		<div>
			{loading ? (
				<FullScreenLoader />
			) : (
				<div>
					<ToastContainer />
					<div className="overflow-x-scroll">
						<Table
							className="table-auto w-full border-collapse border-2 shadow p-2 text-left overflow-x-scroll"
							columns={[
								{
									columnName: 'image',
									customElement: true,
									id: 'image',
									title: 'Image',
									element: ({ data }) => (
										<div className="relative">
											<img
												src={data.image}
												alt={data.name}
												className="w-20 h-20 rounded-full object-cover"
											/>
										</div>
									)
								},
								{
									columnName: 'name',
									customElement: false,
									id: 'name',
									title: 'Category Name'
								},
								{
									columnName: 'createdAt',
									customElement: true,
									id: 'Created At',
									title: 'Created at',
									element: ({ data }) => (
										<div>{moment(data.createdAt).format('LL')}</div>
									)
								},
								{
									columnName: 'updatedAt',
									customElement: false,
									id: 'Updated at',
									title: 'Updated at',
									element: ({ data }) => (
										<div>{moment(data.updatedAt).format('LL')}</div>
									)
								},
								{
									columnName: '_id',
									customElement: false,
									id: '_id',
									title: 'UID'
								}
							]}
							rows={categories}
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
								Displaying {categories.length} of {totalItems} items
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

export default CategoryList;
