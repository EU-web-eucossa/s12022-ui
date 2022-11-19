/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 05:37:40
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 06:40:20
 * @ Description:
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { faAdd, faHome, faList } from '@fortawesome/free-solid-svg-icons';

const sidebar = [
	{
		name: 'Home',
		icon: faHome,
		path: '/admin/dashboard'
	},
	{
		name: 'Categories',
		icon: faList,
		path: '/admin/dashboard/category-list'
	},
	{
		name: 'Products',
		icon: faList,
		path: '/admin/dashboard/product-list'
	},
	{
		name: 'Add Product',
		icon: faAdd,
		path: '/admin/dashboard/add-product'
	},
	{
		name: 'Add Category',
		icon: faAdd,
		path: '/admin/dashboard/add-category'
	}
];
const DashBoard = () => {
	return (
		<div className="flex">
			<div className="flex flex-col justify-between gap-4 border-r border-primary text-black px-4">
				<div>
					<div>
						<Link to="/">
							<img
								src="/ico.png"
								alt=""
								className="w-10 h-10 md:w-12 md:h-12 rounded-full m-auto"
							/>
						</Link>
						<div>
							<h1 className="text-2xl text-center">Admin</h1>
						</div>
					</div>
					<hr className='h-[2px] bg-slate-300'/>
					<div className="flex flex-col gap-4">
						{sidebar.map((item, index) => (
							<div key={index} className="flex gap-2 items-center">
								<FontAwesomeIcon
									icon={item.icon}
									className="text-xl md:text-2xl p-1"
								/>
								<Link to={item.path}>{item.name}</Link>
							</div>
						))}
					</div>
				</div>
				<div>
					<button>Logout</button>
				</div>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default DashBoard;
