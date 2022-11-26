/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified by: Felix Orinda
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 19:50:00

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ProductEntityType } from '../types';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import starGenerator from '../helpers/starGenerator';
import { useAppDispatch } from '../state/hooks';

const HomeProductItem = (product: ProductEntityType) => {
	const dispatch = useAppDispatch();
	// load image component
	const imageRef = React.useRef<HTMLImageElement>(null);

	React.useEffect(() => {
		// load image and once loaded, set the imageRef to the image
		const image = new Image();
		image.src = product.featuredImage!;
		image.onload = () => {
			if (imageRef.current) 
				imageRef.current.src = image.src;
			
		};
	}, []);

	return (
		<div className="flex flex-col justify-between hover:shadow-lg rounded-md transition-all ease-linear duration-500  max-w-[18rem]">
			<Link
				to={`/product/${product._id}`}
				className="relative h-full w-full object-cover overflow-hidden group border-0 "
			>
				<img
					ref={imageRef}
					src={product.featuredImage}
					alt={product.name}
					className="h-72 w-full mx-auto object-scale-down group-hover:scale-105 transition-all ease-linear duration-500"
				/>
			</Link>
			<div className="px-2 py-1">
				<h2
					className="text-[12px] capitalize font-bold text-black 
                "
				>
					{product.name}
				</h2>
				<h2
					className="text-[12px]font-medium text-black
                "
				>
					$ {product.price.toFixed(2)}
				</h2>
			</div>
			<div className="flex gap-2">
				<button className="flex w-1/2 md:w-2/3 gap-2 flex-1 px-4 items-center">
					{starGenerator(product.ratings).map((star, index) => (
						<FontAwesomeIcon icon={star} key={index} color="#F58634" className='text-[10px] sm:text-md'/>
					))}
				</button>
				<button
					className="flex-1 bg-primary text-white py-2 rounded-tl-lg"
					onClick={(e) => {
						e.preventDefault();
						dispatch(addProductToCart(product));
					}}
				>
					<FontAwesomeIcon icon={faAdd} />
				</button>
			</div>
		</div>
	);
};

export default HomeProductItem;


