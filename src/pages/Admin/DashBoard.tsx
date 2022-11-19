/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 05:37:40
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 15:25:13
 * @ Description:
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { logoutUser } from '../../state/slices/userSlice';
import {
	faAdd,
	faBoxOpen,
	faCartShopping,
	faCog,
	faDashboard
} from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../state/hooks';

const sidebar = [
	{
		name: 'Dashboard',
		icon: faDashboard,
		path: '/admin/dashboard'
	},
	{
		name: 'Categories',
		icon: faBoxOpen,
		path: '/admin/dashboard/category-list'
	},
	{
		name: 'Products',
		icon: faCartShopping,
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
	},
	{
		name: 'Profile',
		icon: faCog,
		path: '/admin/dashboard/profile'
	}
];
const DashBoard = () => {
	const { user } = useAppSelector((state) => state.root.user);
	const dispatch = useAppDispatch();

	return (
		<div className="flex w-full">
			<div className="flex flex-col justify-between gap-4 border-r border-primary text-black px-4 w-fit">
				<div className="flex flex-col gap-2 justify-between">
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
					<hr className="h-[2px] bg-slate-300" />
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
					<div className="mt-8">
						<button
							onClick={(e) => {
								e.preventDefault();
								const confirmed = confirm('Are you sure you want to logout?');
								if (confirmed) dispatch(logoutUser());
							}}
							className="w-full p-2 rounded  bg-slate-300"
						>
							Logout
						</button>
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col gap-3 p-4 overflow-x-auto">
				<div className="border-b py-2 flex justify-between border-primary">
					<h1>Welcome back {user?.name}</h1> <div>{user?.email}</div>
				</div>
				<div className="min-w-screen">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
