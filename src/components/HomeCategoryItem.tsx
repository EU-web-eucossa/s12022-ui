/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 20:23:06
 * @ Description:
 */

import { Link } from 'react-router-dom';
import { ProductcategoryType } from '../types';
import React from 'react';

const HomecategoryItem = (props: ProductcategoryType) => {
	// load image component
	const imageRef = React.useRef<HTMLImageElement>(null);

	React.useEffect(() => {
		// load image and once loaded, set the imageRef to the image
		const image = new Image();
		image.src = props.image;
		image.onload = () => {
			if (imageRef.current) 
				imageRef.current.src = image.src;
			
		};
	}, []);

	return (
		<Link to={`/categories?category=${props.name}`} className="min-w-[10rem] group overflow-hidden hover:shadow-md transition-all bg-white duration-500 ease-linear py-2">
			<div className="flex flex-col gap-2 group justify-center items-center overflow-hidden">
				<img
					ref={imageRef}
					src="/product.webp"
					alt=""
					className="w-full h-40 object-contain rounded-md transition-all ease-linear duration-300"
				/>
				<div className="text-sm text-center capitalize py-1 text-black font-medium">
					{props.name}
				</div>
			</div>
		</Link>
	);
};

export default HomecategoryItem;
