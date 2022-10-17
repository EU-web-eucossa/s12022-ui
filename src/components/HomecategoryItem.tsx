import { Link } from 'react-router-dom';
import React from 'react';

const HomecategoryItem = (props: { title: string }) => {
	return (
		<Link to={`/categories?category=${props.title}`} className='min-w-[10rem]'>
			<div className="flex flex-col gap-2 group">
				<img src="/product.webp" alt="" className="w-40 h-40 rounded-md group-hover:animate-pulse" />
				<div className='text-center capitalize text-black font-bold'>{props.title}</div>
			</div>
		</Link>
	);
};

export default HomecategoryItem;
