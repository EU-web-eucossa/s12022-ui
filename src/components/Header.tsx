/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 05:56:42
 * @ Description:
 */

import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { logoutUser } from '../state/slices/userSlice';
import { useLocation } from 'react-router-dom';
import {
	faSearch,
	faShoppingCart,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../state/hooks';

const unloggedLinks = [
	{ name: 'Sign in', path: '/account/sign_in' },
	{ name: 'Sign up', path: '/account/sign_up' }
];
const loggedLinks = [
	{
		name: 'Account',
		path: '/account'
	}
];

const Header = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const {
		cart: { totalQuantity },
		user: { isAuthenticated }
	} = useAppSelector((state) => state.root);
	const [cartOpen, setCartOpen] = React.useState<boolean>(false);
	const closeOnWindowClick = () => {
		cartOpen && setCartOpen(false);
	};
	window.addEventListener('click', closeOnWindowClick);
	React.useEffect(() => {
		return window.removeEventListener('click', closeOnWindowClick);
	}, [location]);

	return (
		<React.Fragment>
			<div className="bg-white z-[1020]">
				<nav className="px-4 sm:px-5 gap-2 md:px-2 max-w-7xl mx-auto flex items-center justify-between">
					<Link to={'/'}>
						<img src="/logo.svg" alt="" className="w-20 h-20 md:w-40 md:h-40" />
					</Link>
					<div className="text-left">
						<h1 className="text-md md:text-4xl font-bold">Discover</h1>
						<p className="text-sm md:text-xl font-medium">
							Find anything you want
						</p>
					</div>
					<div>
						<FontAwesomeIcon icon={faBell} className="text-xl md:text-4xl" />
					</div>
				</nav>
			</div>
			<div className="bg-white sticky top-0 py-2 shadow z-[1020]">
				<nav className="px-4 sm:px-5 md:px-2 max-w-7xl mx-auto flex items-center gap-4">
					<div
						className="relative h-8 md:h-12 w-8 md:w-12 bg-primary rounded-lg cursor-pointer flex items-center justify-center "
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setCartOpen(!cartOpen);
						}}
					>
						{cartOpen && <Cart />}
						<FontAwesomeIcon
							icon={faShoppingCart}
							color="white"
							className="text-md"
						/>
						{totalQuantity > 0 && (
							<span className="absolute -top-1 -right-1 bg-white rounded-full p-1 text-black border-black border text-sm h-5 w-5 flex items-center justify-center">
								{totalQuantity}
							</span>
						)}
					</div>
					<div className="flex px-1 md:px-4 rounded-md flex-[1] items-center w-full border  border-slate-400">
						<FontAwesomeIcon icon={faSearch} size="1x" />
						<input
							type="search"
							placeholder="Search products,brands and categories..."
							className="border-none w-full text-sm md:text-md placeholder:text-placeholder focus:ring-0 focus:border-none focus:outline-none"
						/>
					</div>
					<div className="group relative z-[2000]" tabIndex={0}>
						<button className="border rounded-full">
							<FontAwesomeIcon
								icon={faUser}
								color="white"
								className="text-md text-black h-8 w-8 p-1"
							/>
						</button>
						<div className="hidden top-[calc(100%_+_10px)] h-fit min-w-[200px] py-4 px-2 rounded shadow absolute -right-4 z-[2000] bg-white group-hover:block transition-all ease-linear duration-200 group-hover:top-[100%]">
							{isAuthenticated ? (
								<ul>
									{loggedLinks.map((link) => (
										<li
											key={link.name}
											className="block px-4 hover:bg-primary rounded"
										>
											<Link to={link.path} className="py-2 w-full block">
												{link.name}
											</Link>
										</li>
									))}
									<li className="">
										<button
											onClick={(e) => {
												e.preventDefault();
												e.stopPropagation();
												dispatch(logoutUser());
											}}
											className="text-sm px-4 py-2 w-full rounded-md font-bold block text-black hover:bg-gray-100 hover:text-primary text-left"
										>
											Logout
										</button>
									</li>
								</ul>
							) : (
								<ul>
									{unloggedLinks.map((link) => (
										<li
											key={link.name}
											className="block px-4 hover:bg-primary rounded"
										>
											<Link to={link.path} className="py-2 w-full block">
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default Header;
