import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import { Link } from 'react-router-dom';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import starGenerator from '../helpers/starGenerator';
import { useAppDispatch } from '../state/hooks';

const HomeproductItem = (product: IProduct) => {
	const dispatch = useAppDispatch();

	return (
		<div className="flex flex-col justify-between hover:shadow-lg rounded-md transition-all ease-linear duration-500 border-slate-200 border">
			<Link
				to={`/product/${product.id}`}
				className="relative h-full w-full object-cover overflow-hidden group border-0 "
			>
				<img
					src={product.thumbnail}
					alt={product.title}
					className="h-full mx-auto object-contain group-hover:scale-105 transition-all ease-linear duration-500"
				/>
			</Link>
			<div className="px-2 py-1">
				<h2
					className="text-sm sm:text-md capitalize font-bold text-black 
                "
				>
					{product.title}
				</h2>
				<h2
					className="sm:text-lg font-medium text-black
                "
				>
					$ {product.price.toFixed(2)}
				</h2>
			</div>
			<div className="flex gap-2">
				<button className="flex w-1/2 md:w-2/3 gap-2 flex-1 px-4 items-center">
					{starGenerator(product.rating).map((star, index) => (
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

export default HomeproductItem;


