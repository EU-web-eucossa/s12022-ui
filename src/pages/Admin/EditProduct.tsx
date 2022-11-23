/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-23 14:49:18
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-23 22:52:22
 * @ Description:
 */

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FullScreenLoader from '../../components/FullScreenLoader';
import React from 'react';
import { axiosQuery } from '../../api';
import extractValidLinks from '../../helpers/extractValidLinks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { fieldGenerator } from '../../helpers/fieldGenerator';
import { toast } from 'react-toastify';
import { useAppSelector } from '../../state/hooks';

import { ProductEntityType, ProductcategoryType } from '../../types';

type Props = {
	product: ProductEntityType;
	toggleEdit: () => void;
};

const EditProduct = ({ product, toggleEdit }: Props) => {
	const { low } = product.quantity as any;

	const [loading, setLoading] = React.useState<boolean>(false);
	const [success, setSuccess] = React.useState<boolean>(false);
	const {
		categories: { categories: productCategories },
	} = useAppSelector((state) => state);
	const temp: ProductcategoryType[] = [...productCategories];
	const sortedCategories: ProductcategoryType[] =
		temp.length > 0 ? temp.sort((a, b) => a.name.localeCompare(b.name)) : [];

	const [productData, setProductData] = React.useState<
		ProductEntityType & { [k: string]: any }
	>({ ...product, quantity: low } as unknown as ProductEntityType);
	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		if (name === 'images') {
			const links = extractValidLinks(value)!;

			return setProductData((prev) => ({
				...prev,
				images: links?.length ? links : []
			}));
		}
		if (name === 'featuredImage') {
			const link = extractValidLinks(value);

			return setProductData((prev) => ({
				...prev,
				featuredImage: link?.length ? link[0] : ''
			}));
		}
		setProductData((initial) => ({ ...initial, [name]: value }));
	};
	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>
	) => {
		e.preventDefault();
		e.stopPropagation();
		setLoading(true);

		try {
			const res = await axiosQuery.put(
				`/products/update/${product._id}`,
				productData
			);
			if (res.status === 200 || res.status === 201) {
				toast.success('Product added successfully');
				setSuccess(true);

				setTimeout(() => {
					toggleEdit();
				}, 2000);
			}
		} catch (err) {
			if (err instanceof AxiosError) toast.error(err.response?.data.message);
		} finally {
			setLoading(false);
			setSuccess(false);
		}

		return;
	};
	const handleRemoveImage = (index: number) => {
		const newImages = productData.images.filter((_, i) => i !== index);
		setProductData((initial) => ({ ...initial, images: newImages }));
	};

	return (
		<div className="w-full text-[12px]">
			{/* <ToastContainer /> */}
			{success ? (
				<div className="text-green-500 text-center p-10">
					Product Updated successfully
				</div>
			) : loading ? (
				<FullScreenLoader />
			) : (
				<form
					className=" shadow bg-white rounded"
					onSubmit={(e) => {
						handleSubmit(e);
					}}
				>
					<div className="grid grid-cols-1  md:grid-cols-2 gap-4">
						{/* String fields */}
						<div className="flex flex-col gap-4">
							{fieldGenerator({
								name: 'name',
								label: 'Name',
								value: productData.name,
								placeholder: 'Enter Product name',
								type: 'text',
								required: true,
								onChange: handleInputChange
							})}
							{fieldGenerator({
								name: 'featuredImage',
								label: 'Featured Image',
								value: productData.featuredImage,
								placeholder: 'Enter Product featured image url',
								type: 'url',
								required: true,
								onChange: handleInputChange
							})}{' '}
							{fieldGenerator({
								name: 'price',
								label: 'Price',
								value: String(productData.price),
								placeholder: 'Enter Product price',
								type: 'number',
								min: 1,
								required: true,
								onChange: handleInputChange
							})}
							{fieldGenerator({
								name: 'quantity',
								label: 'Quantity',
								value: String(productData.quantity),
								placeholder: 'Enter Product quantity',
								type: 'number',
								min: 1,
								max: 10000,
								required: true,
								onChange: handleInputChange
							})}
							{fieldGenerator({
								name: 'ratings',
								label: 'Ratings',
								value: String(productData.ratings),
								placeholder: 'Enter Product ratings',
								type: 'number',
								min: 1,
								max: 5,
								required: true,
								onChange: handleInputChange
							})}
							<label htmlFor="inStock" className="flex items-center">
								<input
									type="checkbox"
									name="inStock"
									id="inStock"
									checked={productData.inStock}
									onChange={(e) => {
										setProductData((initial) => ({
											...initial,
											inStock: e.target.checked
										}));
									}}
								/>
								<span className="ml-2">In Stock</span>
							</label>
						</div>
						{/* Number fields */}
						<div className="flex flex-col gap-4">
							<label htmlFor="category" className="flex flex-col">
								<span className="capitalize font-medium">Category</span>
								<select
									name="category"
									id="category"
									value={productData.category}
									onChange={handleInputChange}
									className="border border-gray-300 rounded-md p-1 w-full focus:ring-0 focus:border-[1px]"
								>
									<option value={'----Please select a category----'} disabled>
										----Please select a category----
									</option>
									{productCategories.length > 0 &&
										sortedCategories.map((category) => (
											<option key={category._id} value={category._id}>
												{category.name}
											</option>
										))}
								</select>
							</label>

							<label htmlFor="description flex flex-col w-full">
								<span className="capitalize font-medium">Description</span>
								<textarea
									name="description"
									id="description"
									required
									value={productData.description}
									onChange={handleInputChange}
									placeholder="Enter Product description"
									rows={5}
									className="border border-gray-300 rounded-md p-2 w-full focus:ring-0 focus:border-[1px] resize-none"
								></textarea>
							</label>
							<label htmlFor="images" className="flex flex-col w-full">
								<span className="capitalize font-medium">Images</span>
								<textarea
									name="images"
									id="images"
									required
									value={productData.images}
									onChange={handleInputChange}
									placeholder="Enter Add images url separated by comma"
									rows={5}
									className="border border-gray-300 rounded-md p-2 w-full focus:ring-0 focus:border-[1px] resize-none"
								></textarea>
							</label>
						</div>
					</div>
					{productData.featuredImage && (
						<div className="flex flex-col md:flex-row gap-4">
							<div>
								<h1>Featured image</h1>
								<img
									src={productData.featuredImage}
									alt=""
									className="h-20 w-20"
								/>
							</div>
							<div>
								<h1>Image gallery</h1>
								<div className="flex flex-wrap gap-2 border">
									{productData.images.length > 0 &&
										productData.images.map((image, index) => (
											<div key={index} className="flex flex-col gap-2 relative">
												<img src={image} alt="" className="h-20 w-20" />
												<FontAwesomeIcon
													icon={faTimes}
													onClick={() => {
														handleRemoveImage(index);
													}}
													color="red"
													className=" text-white bg-red-600 h-4 w-4 rounded-full cursor-pointer absolute top-0 right-0"
												/>
											</div>
										))}
								</div>
							</div>
						</div>
					)}
					<button
						className="bg-primary my-4 p-2 border-none rounded w-full disabled:cursor-not-allowed disabled:opacity-50"
						type="submit"
						disabled={loading}
					>
						Update product
					</button>
				</form>
			)}
		</div>
	);
};

export default EditProduct;
