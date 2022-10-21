/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import starGenerator from '../helpers/starGenerator';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';

const SingleProductPage = () => {
	const { id } = useParams();
	const { products:{products} } = useAppSelector((state) => state);
	const [currentProduct, setCurrentProdut] = React.useState<IProduct | null>(
		null
	);
	React.useEffect(() => {
		const p = products.find((p) => p.id === Number(id)!);
		setCurrentProdut(p!);
	}, [products.length]);
	const dispatch = useAppDispatch();

	return (
		<div>
			{currentProduct && (
				<div className=" flex py-5">
					<div className="flex flex-col gap-3">
						<img src={currentProduct.thumbnail} alt="" className="h-80" />
						<div className="flex gap-2">
							{currentProduct.images.length > 0 &&
								currentProduct.images.map((image, i) => (
									<img
										key={i}
										src={image}
										alt=""
										className="h-32 w-32 object-cover border rounded-md border-black shadow-lg hover:scale-110 cursor-pointer transition-all ease-linear duration-300"
									/>
								))}
						</div>
					</div>
					<div className="pl-8">
						<h1 className="text-4xl font-bold capitalize">
							{currentProduct.title}
						</h1>
						<div className="pt-3">
							{starGenerator(currentProduct.rating).map((s, i) => (
								<FontAwesomeIcon
									key={i}
									icon={s}
									color="#F58634"
									className="cursor-pointer"
								/>
							))}
						</div>
						<h2 className="pt-3 capitalize font-bold">
							price {currentProduct.price}
						</h2>
						<button
							className="bg-primary text-white py-2  p-4 rounded-full"
							onClick={(e) => {
								e.preventDefault();
								dispatch(addProductToCart({ ...currentProduct }));
							}}
						>
							ADD TO CART
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleProductPage;
