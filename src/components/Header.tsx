import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useAppSelector } from '../state/hooks';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const { totalQuantity } = useAppSelector(
		(state) => state.root.cart
	);
	const [cartOpen, setCartOpen] = React.useState<boolean>(false);

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
					<div className="flex px-1 md:px-4 rounded-md flex-[1] items-center w-full border  border-slate-400">
						<FontAwesomeIcon icon={faSearch} size="1x" />
						<input
							type="search"
							placeholder="Search products,brands and categories..."
							className="border-none w-full text-sm md:text-md placeholder:text-placeholder focus:ring-0 focus:border-none focus:outline-none"
						/>
					</div>
					{/* <div className="flex items-center gap-4 font-bold">
						KSh {totalPrice.toFixed(2)}
					</div> */}
					<div
						className="h-8 md:h-12 w-8 md:w-12 bg-primary rounded-lg cursor-pointer flex items-center justify-center relative"
						onClick={(e) => {
							e.preventDefault();
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
				</nav>
			</div>
		</React.Fragment>
	);
};

export default Header;
