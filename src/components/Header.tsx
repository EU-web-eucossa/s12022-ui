import { Link } from 'react-router-dom';
import React from 'react';
import navLinks from '../data/nav';

const Header = () => {
	return (
		<div className="bg-white shadow-md py-4 sticky top-0 z-[1020]">
			<nav className="flex items-center justify-between max-w-7xl mx-auto">
				<Link to={'/'} className="uppercase text-primary text-4xl">
					Grab me
				</Link>
				<ul className="flex gap-4">
					{navLinks.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.path} className="text-primary capitalize font-bold flex">
									{item.name}
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
