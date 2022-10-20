/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import { addProductToCart } from '../state/slices/cartSlice';
import slugify from '../helpers/slugify';
import starGenerator from '../helpers/starGenerator';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';


const SingleProductPage = () => {
	const { id } = useParams();
	const { products } = useAppSelector((state) => state.products);
	const [currentProduct ,setCurrentProdut] = React.useState<IProduct | null>(null);
	React.useEffect(() => {
		const p = products.find(
			(p) => slugify(p.name).toLowerCase() === slugify(id!).toLowerCase()
		);
		setCurrentProdut(p!);
	}, [id]);
	const dispatch= useAppDispatch();

	return (
		<div>
			{currentProduct && (
				<div className="flex justify-between items-center py-5">
					<div className='flex flex-col'>
						<img src={currentProduct.featuredImage} alt="" className="h-80 w-80" />
						<p>{currentProduct.description}</p>
					</div>
					<div className='pr-4'>
						<h1 className="text-4xl font-bold capitalize">{currentProduct.name}</h1>
						<div className='pt-3'>
							{starGenerator(currentProduct.ratings).map((s, i) => (
								<FontAwesomeIcon
									key={i}
									icon={s}
									color="#F58634"
									className="cursor-pointer"
								/>
							))}
						</div>
						<h2 className="pt-3 capitalize font-bold">price {currentProduct.price}</h2>
						<button
							className="bg-primary text-white py-2  p-4 rounded-full"
							onClick={(e)=>{
								e.preventDefault();
								dispatch(addProductToCart({...currentProduct}));
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
