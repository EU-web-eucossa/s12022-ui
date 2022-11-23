import AboutPage from '../pages/AboutPage';
import AddCategory from '../pages/Admin/AddCategory';
import Addproduct from '../pages/Admin/AddProduct';
import BaseLayout from '../layouts/BaseLayout';
import CartPage from '../pages/CartPage';
import CategoriesPage from '../pages/CategoriesPage';
import CategoryList from '../pages/Admin/CategoryList';
import CheckoutPage from '../pages/CheckoutPage';
import ContactPage from '../pages/ContactPage';
import DashBoard from '../pages/Admin/DashBoard';
import DashSummary from '../pages/Admin/DashSummary';
import EmptyLayout from '../layouts/EmptyLayout';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import ProductList from '../pages/Admin/ProductList';
import ProfilePage from '../pages/ProfilePage';
import React from 'react';
import SignupPage from '../pages/SignupPage';
import SingleProductPage from '../pages/SingleProductPage';
import { createBrowserRouter } from 'react-router-dom';
import layoutWrap from '../helpers/LayoutWrapper';

const routes =createBrowserRouter([
	{
		element: layoutWrap(BaseLayout, Homepage),
		path: '/'
	},
	{
		element: layoutWrap(BaseLayout, SingleProductPage),
		path: '/product/:id'
	},
	{
		element: layoutWrap(BaseLayout, CategoriesPage),
		path: '/categories'
	},
	{
		element: layoutWrap(BaseLayout, AboutPage),
		path: '/about'
	},
	{
		element: layoutWrap(BaseLayout, ContactPage),
		path: '/contact'
	},
	{
		element: layoutWrap(EmptyLayout, LoginPage),
		path: '/account/sign-in'
	},
	{
		element: layoutWrap(EmptyLayout, ProfilePage),
		path: '/account/profile'
	},
	{
		element: layoutWrap(EmptyLayout, SignupPage),
		path: '/account/sign-up'
	},
	{
		element: layoutWrap(BaseLayout, CartPage),
		path: '/cart'
	},
	{
		element: layoutWrap(EmptyLayout, CheckoutPage, true),
		path: '/checkout'
	},
	{
		element: layoutWrap(EmptyLayout, DashBoard, { role: 'admin' }),
		path: '/admin/dashboard',
		children: [
			{
				element: layoutWrap(EmptyLayout, DashSummary),
				path: '/admin/dashboard'
			},
			{
				element: layoutWrap(EmptyLayout, AddCategory),
				path: '/admin/dashboard/add-category'
			},
			{
				element: layoutWrap(EmptyLayout, Addproduct),
				path: '/admin/dashboard/add-product'
			},
			{
				element: layoutWrap(EmptyLayout, CategoryList),
				path: '/admin/dashboard/category-list'
			},
			{
				element: layoutWrap(EmptyLayout, ProductList),
				path: '/admin/dashboard/product-list'
			},
			{
				element: layoutWrap(EmptyLayout, ProfilePage),
				path: '/admin/dashboard/profile'
			},
			{
				element: layoutWrap(EmptyLayout, () => (
					<div className="h-full w-full flex items-center justify-center">
						<div>Page you are looking for is not available</div>
					</div>
				)), // 404 page)),
				path: '/admin/dashboard/*'
			}
		]
	},
	{
		element: layoutWrap(BaseLayout, NotFound),
		path: '*'
	}
]);

export default routes;
