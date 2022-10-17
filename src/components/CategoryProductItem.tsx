import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import starGenerator from '../helpers/starGenerator';
import { faAdd, faListDots } from '@fortawesome/free-solid-svg-icons';

const CategoryProductItem = ({ product }: { product: IProduct }) => {
	return (
		<div className="shadow-md rounded-md">
			<div className="h-48 relative">
				<img
					src="/product.webp"
					alt=""
					className="w-full object-cover absolute h-full -z-[1]"
				/>
				<div className="p-1 flex justify-between">
					<FontAwesomeIcon icon={faListDots} />
					<FontAwesomeIcon icon={faHeart} />
				</div>
			</div>
			<div className='px-1 font-roboto capitalize'>
				<h1 className='text-lg font-bold'>{product.name}</h1>
				<p>
					Ksh <strong>{product.price}</strong>
				</p>
			</div>
			<div className="flex justify-between items-center">
				<div className="pl-2 flex items gap-1">
					{starGenerator(product.ratings).map((r, i) => (
						<FontAwesomeIcon icon={r} key={i} color="#F58634" className='border-[.2px] rounded-full border-slate-300' />
					))}
				</div>
				<button className="bg-primary text-white py-2 h-fit w-2/5 rounded-tl-xl">
					<FontAwesomeIcon icon={faAdd} />
				</button>
			</div>
		</div>
	);
};

export default CategoryProductItem;