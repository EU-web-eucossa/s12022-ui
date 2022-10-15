import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
	return (
		<div className='bg-white shadow-md py-4'>
			<nav className="flex items-center justify-between max-w-7xl mx-auto">
				<h2 className="uppercase text-orange-500 text-4xl">Grab me</h2>
				<ul className="flex gap-4">
					{['Home', 'About', 'Contact'].map((item, index) => {
						return (
							<li key={index}>
								<Link
									to={`/${item.toLowerCase()}`}
									className="text-orange-500 uppercase"
								>
									{item}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
