/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import { Link } from 'react-router-dom';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import starGenerator from '../helpers/starGenerator';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';

const SingleProductPage = () => {
	const { id } = useParams();
	const {
		products: { products },
		categories: { categories }
	} = useAppSelector((state) => state);
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
				<div className=" flex py-5 flex-col">
					<div className="grid  grid-cols-1 md:grid-cols-2">
						<div className="flex flex-col gap-4">
							<img
								src={currentProduct.thumbnail}
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
					<hr className="bg-slate-400 my-10" />
					<div className="flex flex-col justify-center items-center">
						<h4 className='my-4 underline'>More Like This</h4>
						<div className="flex  justify-around items-center gap-4">
							{categories.slice(0,3).map((category) => (
								<Link key={category}
									to={`/categories?category=${category}`}
									className="text-primary capitalize font-bold border border-primary rounded-2xl px-4 py-2"
								>
									{category}
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
			
		</div>
	);
};

export default SingleProductPage;
