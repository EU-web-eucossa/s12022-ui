/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import slugify from '../helpers/slugify';
import starGenerator from '../helpers/starGenerator';
import { useAppSelector } from '../state/hooks';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
	const { id } = useParams();
	const { products } = useAppSelector((state) => state.products);
	const [product, setProduct] = React.useState<IProduct | null>(null);
	React.useEffect(() => {
		const p = products.find(
			(p) => slugify(p.name).toLowerCase() === slugify(id!).toLowerCase()
		);
		setProduct(p!);
	}, [id]);

	return (
		<div>
			{product && (
				<div className=" flex py-5">
					<img src={product.featuredImage} alt="" className="h-80" />
					<div className='pl-8'>
						<h1 className="text-4xl font-bold capitalize">{product.name}</h1>
						<div className='pt-3'>
							{starGenerator(product.ratings).map((s, i) => (
								<FontAwesomeIcon
									key={i}
									icon={s}
									color="#F58634"
									className="cursor-pointer"
								/>
							))}
						</div>
						<h2 className="pt-3 capitalize font-bold">price {product.price}</h2>
						<button
							className="bg-primary text-white py-2  p-4 rounded-full"
				
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
