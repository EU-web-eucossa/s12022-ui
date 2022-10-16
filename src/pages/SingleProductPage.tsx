/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import allproducts from '../data/products';
import slugify from '../helpers/slugify';
import starGenerator from '../helpers/starGenerator';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
	const [product, setProduct] = React.useState<IProduct | null>(null);
	const { id } = useParams();
	React.useEffect(() => {
		const p = allproducts.find(
			(p) => slugify(p.name).toLowerCase() === slugify(id!).toLowerCase()
		);
		setProduct(p!);
	}, [id]);

	return (
		<div>
			{product && (
				<div className="py-5">
					<img src={product.featuredImage} alt="" className="h-80" />
					<h1 className="text-4xl font-bold capitalize">{product.name}</h1>
					<div>
						{starGenerator(product.ratings).map((s, i) => (
							<FontAwesomeIcon
								key={i}
								icon={s}
								color="#F58634"
								className="cursor-pointer"
							/>
						))}
					</div>
					<h2 className='capitalize font-bold'>price {product.price}</h2>
				</div>
			)}
		</div>
	);
};

export default SingleProductPage;
