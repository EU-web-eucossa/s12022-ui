import AboutPage from '../pages/AboutPage';
import BaseLayout from '../layouts/BaseLayout';
import CartPage from '../pages/CartPage';
import CategoriesPage from '../pages/CategoriesPage';
import ContactPage from '../pages/ContactPage';
import EmptyLayout from '../layouts/EmptyLayout';
import Homepage from '../pages/Homepage';
import { IRouteProps } from 'react-router-map/dist/types';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import ProfilePage from '../pages/ProfilePage';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AddCategory from '../pages/AddCategory';
import Addproduct from '../pages/Addproduct';
import CategoryList from '../pages/CategoryList';
import CheckoutPage from '../pages/CheckoutPage';
import DashBoard from '../pages/DashBoard';
import DashSummary from '../pages/DashSummary';
import ProductList from '../pages/ProductList';
import React from 'react';
import SignupPage from '../pages/SignupPage';
import SingleProductPage from '../pages/SingleProductPage';
import layoutWrap from '../helpers/LayoutWrapper';

const routes: IRouteProps[] = [
	{
		Component: layoutWrap(BaseLayout, Homepage),
		pathName: 'Home',
		urlPath: '/'
	},
	{
		Component: layoutWrap(BaseLayout, SingleProductPage),
		pathName: 'SingleProductPage',
		urlPath: '/product/:id'
	},
	{
		Component: layoutWrap(BaseLayout, CategoriesPage),
		pathName: 'categories',
		urlPath: '/categories'
	},
	{
		Component: layoutWrap(BaseLayout, AboutPage),
		hasChildren: false,
		pathName: 'About',
		urlPath: '/about'
	},
	{
		Component: layoutWrap(BaseLayout, ContactPage),
		pathName: 'Contact',
		urlPath: '/contact'
	},
	{
		Component: layoutWrap(EmptyLayout, LoginPage),
		pathName: 'Login',
		urlPath: '/account/sign-in'
	},
	{
		Component: layoutWrap(EmptyLayout, ProfilePage),
		pathName: 'Profile',
		urlPath: '/account/profile'
	},
	{
		Component: layoutWrap(EmptyLayout, SignupPage),
		pathName: 'Signup',
		urlPath: '/account/sign-up'
	},
	{
		Component: layoutWrap(BaseLayout, CartPage),
		pathName: 'Cart',
		urlPath: '/cart'
	},
	{
		Component: layoutWrap(EmptyLayout, CheckoutPage, true),
		pathName: 'Checkout',
		urlPath: '/checkout'
	},
	{
		Component: layoutWrap(EmptyLayout, DashBoard, true),
		pathName: 'Admin Dashboard',
		urlPath: '/admin/dashboard',
		nestedComponents: [
			{
				Component: layoutWrap(EmptyLayout, DashSummary),
				pathName: 'Dashboard',
				urlPath: '/admin/dashboard'
			},
			{
				Component: layoutWrap(EmptyLayout, AddCategory),
				pathName: 'Add Category',
				urlPath: '/admin/dashboard/add-category'
			},
			{
				Component: layoutWrap(EmptyLayout, Addproduct),
				pathName: 'Add Product',
				urlPath: '/admin/dashboard/add-product'
			},
			{
				Component: layoutWrap(EmptyLayout, CategoryList),
				pathName: 'Category List',
				urlPath: '/admin/dashboard/category-list'
			},
			{
				Component: layoutWrap(EmptyLayout, ProductList),
				pathName: 'Product List',
				urlPath: '/admin/dashboard/product-list'
			},
			{
				Component: layoutWrap(EmptyLayout, () => (
					<div className="h-full w-full flex items-center justify-center">
						<div>Page you are looking for is not available</div>
					</div>
				)), // 404 page)),
				pathName: '404',
				urlPath: '/admin/dashboard/*'
			}
		]
	},
	{
		Component: layoutWrap(BaseLayout, NotFound),
		pathName: 'NotFound',
		urlPath: '*'
	}
];

export default routes;
