import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../interfaces/product';
import React from 'react';
import allProducts from '../data/products';
import starGenerator from '../helpers/starGenerator';

const Homepage = () => {
	const [products, setproducts] = React.useState<IProduct[]>([]);

	React.useEffect(() => {
		setproducts(allProducts);
	}, []);
	console.log(products.slice(0, 4));
	
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4">
			{products.map((p) => (
				<div key={p.name}>
					<div className="h-96 w-100">
						<img src={p.featuredImage} alt="" className="w-full object-cover" />
					</div>
					<div>
						<h2>{p.name}</h2>
						<div>
							{starGenerator(p.ratings).map((s, i) => (
								<FontAwesomeIcon key={i} icon={s} color="#F58634" className='cursor-pointer' />
							))}
						</div>
						<div>{p.ratings}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Homepage;
