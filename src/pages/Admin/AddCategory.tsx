/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { ProductcategoryType } from '../../types';
import React from 'react';
import { axiosQuery } from '../../api';
import extractValidLinks from '../../helpers/extractValidLinks';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddCategory = () => {
	const [loading, setLoading] = React.useState<boolean>(false);
	const [success, setSuccess] = React.useState<boolean>(false);
	const navigate = useNavigate();
	const [catagoryData, setCatagoryData] = React.useState<
		ProductcategoryType & { [k: string]: any }
	>({
		name: '',
		description: '',
		image: ''
	} as ProductcategoryType);
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'image') {
			const link = extractValidLinks(value)[0];
			setCatagoryData({ ...catagoryData, [name]: link });

			return;
		}
		setCatagoryData((initial) => ({ ...initial, [name]: value }));
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		try {
			const res = await axiosQuery.post('/categories/add', catagoryData);
			if (res.status === 200 || res.status === 201) {
				toast.success('Category added successfully');
				setSuccess(true);
				setTimeout(() => {
					navigate('/admin/dashboard/category-list');
				}, 2000);
			}
		} catch (err) {
			if (err instanceof AxiosError) 
				toast.error(err.response?.data.message);
			
		} finally {
			setLoading(false);
		}

		toast.error('Please fill all the fields');
	};

	return (
		<div className="w-full ">
			<ToastContainer />
			{success ? (
				<div className="text-green-500 text-center p-10">
					Category added successfully redirecting....
				</div>
			) : (
				<form
					className="w-full p-8 shadow bg-white rounded"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<h1 className="text-center font-bold my-5">Add new Item category</h1>
					<div className="flex flex-col gap-3">
						{Object.keys(catagoryData).map((key, index) => {
							return (
								<div key={index} className="flex flex-col w-full">
									<label htmlFor={key} className="capitalize font-medium">
										{key}
									</label>
									<input
										type={key === 'image' ? 'url' : 'text'}
										placeholder={
											key === 'image' ? 'https://example.com/image.png' : key
										}
										name={key}
										id={key}
										value={catagoryData[key]}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md p-2 w-full focus:ring-0 focus:border-[1px]"
									/>
								</div>
							);
						})}
					</div>
					<div>
						{catagoryData.image && (
							<img
								src={catagoryData.image}
								alt="category"
								className="w-20 h-20 object-cover rounded-md"
							/>
						)}
					</div>
					<button
						className="bg-primary my-4 p-2 border-none rounded w-full disabled:cursor-not-allowed disabled:opacity-50"
						type="submit"
						disabled={loading}
					>
						Add Category
					</button>
				</form>
			)}
		</div>
	);
};

export default AddCategory;
