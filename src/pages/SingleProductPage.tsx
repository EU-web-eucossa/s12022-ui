/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import slugify from '../helpers/slugify';
import starGenerator from '../helpers/starGenerator';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';


const SingleProductPage = ({ product }: { product: IProduct }) => {
	const { id } = useParams();
	const { products } = useAppSelector((state) => state.products);
	const [item ,setItem] = React.useState<IProduct | null>(null);
	React.useEffect(() => {
		const p = products.find(
			(p) => slugify(p.name).toLowerCase() === slugify(id!).toLowerCase()
		);
		setItem(p!);
	}, [id]);
	const dispatch= useAppDispatch();

	return (
		<div>
			{item && (
				<div className=" flex py-5">
					<img src={item.featuredImage} alt="" className="h-80" />
					<div className='pl-8'>
						<h1 className="text-4xl font-bold capitalize">{item.name}</h1>
						<div className='pt-3'>
							{starGenerator(item.ratings).map((s, i) => (
								<FontAwesomeIcon
									key={i}
									icon={s}
									color="#F58634"
									className="cursor-pointer"
								/>
							))}
						</div>
						<h2 className="pt-3 capitalize font-bold">price {item.price}</h2>
						<button
							className="bg-primary text-white py-2  p-4 rounded-full"
							onClick={(e)=>{
								e.preventDefault();
								dispatch(addProductToCart({...product}));
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
