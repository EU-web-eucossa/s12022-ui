/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-23 16:34:27
 * @ Description:
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ProductEntityType } from '../types';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import starGenerator from '../helpers/starGenerator';
import { useAppDispatch } from '../state/hooks';

import { faAdd, faListDots } from '@fortawesome/free-solid-svg-icons';

const CategoryProductItem = ({ product }: { product: ProductEntityType }) => {
	const dispatch = useAppDispatch();

	return (
		<div className="shadow-md rounded-md flex flex-col justify-between max-w-sm">
			<Link to={`/product/${product._id}`} className="h-64 relative">
				<img
					src={product.featuredImage}
					alt=""
					className="w-full object-fill absolute h-64 -z-[1]"
				/>
				<div className="p-1 flex justify-between">
					<FontAwesomeIcon icon={faListDots} />
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</Link>
			<div className="px-1 font-roboto capitalize">
				<h1 className="text-lg font-bold">{product.name}</h1>
				<p>
					<strong>$ {product.price.toFixed(2)}</strong>
				</p>
			</div>
			<div className="flex justify-between items-center">
				<div className="w-1/2 md:pl-2 flex items gap-1">
					{starGenerator(product.ratings).map((r, i) => (
						<FontAwesomeIcon
							icon={r}
							key={i}
							color="#F58634"
							className="border-[.2px] rounded-full border-slate-300 text-sm"
						/>
					))}
				</div>
				<button
					className="bg-primary text-white md:py-2 h-fit w-2/5 rounded-tl-xl"
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

export default CategoryProductItem;
