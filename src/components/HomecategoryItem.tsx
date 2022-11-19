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
		<Link to={`/categories?category=${props.name}`} className="min-w-[10rem] group overflow-hidden hover:shadow-md transition-all duration-500 ease-linear hover:border">
			<div className="flex flex-col gap-2 group">
				<img
					ref={imageRef}
					src="/product.webp"
					alt=""
					className="w-40 h-40 object-cover rounded-md group-hover:scale-105 transition-all ease-linear duration-300"
				/>
				<div className="text-center capitalize text-black font-bold">
					{props.name}
				</div>
			</div>
		</Link>
	);
};

export default HomecategoryItem;
