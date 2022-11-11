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
import CheckoutPage from '../pages/CheckoutPage';
import React from 'react';
import SignupPage from '../pages/SignupPage';
import SingleProductPage from '../pages/SingleProductPage';
import layoutWrap from '../helpers/LayoutWrapper';

const routes: IRouteProps[] = [
	{
		Component: layoutWrap(BaseLayout, Homepage),
		hasChildren: false,
		pathName: 'Home',
		urlPath: '/'
	},
	{
		Component: layoutWrap(BaseLayout, SingleProductPage),
		hasChildren: false,
		pathName: 'SingleProductPage',
		urlPath: '/product/:id'
	},
	{
		Component: layoutWrap(BaseLayout, CategoriesPage),
		hasChildren: false,
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
		hasChildren: false,
		pathName: 'Contact',
		urlPath: '/contact'
	},
	{
		Component: layoutWrap(EmptyLayout, LoginPage),
		pathName: 'Login',
		hasChildren: false,
		urlPath: '/account/sign_in'
	},
	{
		Component: layoutWrap(EmptyLayout, ProfilePage),
		pathName: 'Profile',
		hasChildren: false,
		urlPath: '/account/profile'
	},
	{
		Component: layoutWrap(EmptyLayout, SignupPage),
		pathName: 'Signup',
		urlPath: '/account/sign_up',
		hasChildren: false
	},
	{
		Component: layoutWrap(BaseLayout, CartPage),
		pathName: 'Cart',
		urlPath: '/cart',
		hasChildren: false
	},
	{
		Component: layoutWrap(EmptyLayout, CheckoutPage),
		pathName: 'Checkout',
		urlPath: '/checkout',
		hasChildren: false
	},
	{
		Component: layoutWrap(BaseLayout, NotFound),
		hasChildren: false,
		pathName: 'NotFound',
		urlPath: '*'
	}
];

export default routes;
