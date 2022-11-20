/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 19:48:29
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ProductEntityType } from '../types';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import starGenerator from '../helpers/starGenerator';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';

const SingleProductPage = () => {
	const { id } = useParams();
	const {
		products: { products },
		// categories: { categories }
	} = useAppSelector((state) => state);
	const [currentProduct, setCurrentProdut] =
		React.useState<ProductEntityType | null>(null);
	const [productRelated, setProductRelated] = React.useState<
		ProductEntityType[]
	>([]);

	const filterRelatedProductsAndRandomize = (products: ProductEntityType[]) => {
		const relatedProducts = products.filter((product) => {
			return product.category === currentProduct?.category;
		});

		const randomize = (array: ProductEntityType[]) => {
			let currentIndex = array.length,
				temporaryValue,
				randomIndex;

			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		};

		return randomize(relatedProducts);
	};

	React.useEffect(() => {
		const p = products.find((p) => p._id === id!);
		setCurrentProdut(p!);
	}, [products.length, id]);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (currentProduct) {
			const relatedProducts = filterRelatedProductsAndRandomize(products);
			setProductRelated(relatedProducts);
		}
	}, [currentProduct, id]);

	return (
		<div>
			{currentProduct && (
				<div className=" flex py-5 flex-col">
					<div className="grid  grid-cols-1 md:grid-cols-2">
						<div className="flex flex-col gap-4">
							<img
								src={currentProduct.featuredImage}
								alt=""
								className="h-96 object-contain rounded-md"
							/>

							<div className="flex gap-2 w-full overflow-x-scroll no-scrollbar">
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
							<p>{currentProduct.description}</p>
						</div>
						<div className="pl-8">
							<h1 className="text-lg sm:text-md font-bold capitalize">
								{currentProduct.name}
							</h1>
							<div className="pt-3">
								{starGenerator(currentProduct.ratings).map((s, i) => (
									<FontAwesomeIcon
										key={i}
										icon={s}
										color="#F58634"
										className="cursor-pointer"
									/>
								))}
							</div>
							<h2 className="py-4 capitalize">
								price <strong>$ {currentProduct.price.toFixed(2)}</strong>
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
					<hr className="bg-slate-400 my-10" />
					<div className="flex flex-col justify-center items-center">
						<h4 className="my-4 underline">More Like This</h4>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-center items-center gap-4">
							{productRelated.slice(0, 6).map(
								(relatedProduct) =>
									relatedProduct._id !== currentProduct._id && (
										<Link
											key={relatedProduct.name}
											to={`/product/${relatedProduct._id}`}
											className="text-primary capitalize font-bold max-w-[30rem]"
										>
											<img
												src={relatedProduct.featuredImage}
												alt=""
												className="h-64 w-full object-scale-down"
											/>
											<div className="px-4">{relatedProduct.name}</div>
										</Link>
									)
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SingleProductPage;
