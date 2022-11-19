import { AxiosError } from 'axios';
import { ProductcategoryType } from '../types';
import React from 'react';
import { axiosQuery } from '../api';
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
		setCatagoryData((initial) => ({ ...initial, [name]: value }));
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		if (catagoryData.name && catagoryData.description && catagoryData.image) {
			setLoading(true);

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
				if (err instanceof AxiosError) {
					console.log(err.response);

					toast.error(err.response?.data.message);
				}
			} finally {
				setLoading(false);
			}
            
			return;
		}
		toast.error('Please fill all the fields');
	};

	return (
		<div className="w-full ">
			<form
				className="w-full p-8 shadow bg-white rounded"
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<ToastContainer />
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
				<button
					className="bg-primary my-4 p-2 border-none rounded w-full disabled:cursor-not-allowed disabled:opacity-50"
					type="submit"
					disabled={loading}
				>
					Add product
				</button>
			</form>
		</div>
	);
};

export default AddCategory;
