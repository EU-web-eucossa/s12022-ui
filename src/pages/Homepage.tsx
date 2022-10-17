import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import slugify from '../helpers/slugify';
import starGenerator from '../helpers/starGenerator';
import { useAppSelector } from '../state/hooks';

const Homepage = () => {
	const { products } = useAppSelector((state) => state.products);

	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4">
			{products.map((p) => (
				<div key={p.name} className="flex flex-col gap-4">
					<Link to={`/product/${slugify(p.name)}`} className="w-100">
						<img src={p.featuredImage} alt="" className="w-full object-cover" />
					</Link>
					<div>
						<h2 className="text-xl font-bold capitalize">{p.name}</h2>
						<div>
							{starGenerator(p.ratings).map((s, i) => (
								<FontAwesomeIcon
									key={i}
									icon={s}
									color="#F58634"
									className="cursor-pointer"
								/>
							))}
						</div>
						<div className="text-lg font-bold">${p.price}</div>
						<div>Price {p.price}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Homepage;
