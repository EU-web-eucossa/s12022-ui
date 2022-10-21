import AboutPage from '../pages/AboutPage';
import BaseLayout from '../layouts/BaseLayout';
import CartPage from '../pages/CartPage';
import CategoriesPage from '../pages/CategoriesPage';
import ContactPage from '../pages/ContactPage';
import EmptyLayout from '../layouts/EmptyLayout';
import Homepage from '../pages/Homepage';
import { IRouteProps } from '../interfaces/router';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import ProfilePage from '../pages/ProfilePage';
import React from 'react';
import SignupPage from '../pages/SignupPage';
import SingleProductPage from '../pages/SingleProductPage';
import layoutWrap from '../helpers/LayoutWrapper';

const routes: IRouteProps[] = [
	{
		Component: layoutWrap(BaseLayout, Homepage),
		isNested: false,
		pathName: 'Home',
		urlPath: '/'
	},
	{
		Component: layoutWrap(BaseLayout, SingleProductPage),
		isNested: false,
		pathName: 'SingleProductPage',
		urlPath: '/product/:id'
	},
	{
		Component: layoutWrap(BaseLayout, CategoriesPage),
		isNested: false,
		pathName: 'categories',
		urlPath: '/categories'
	},
	{
		Component: layoutWrap(BaseLayout, AboutPage),
		isNested: false,
		pathName: 'About',
		urlPath: '/about'
	},
	{
		Component: layoutWrap(BaseLayout, ContactPage),
		isNested: false,
		pathName: 'Contact',
		urlPath: '/contact'
	},
	{
		Component: layoutWrap(EmptyLayout, LoginPage),
		pathName: 'Login',
		isNested: false,
		urlPath: '/login'
	},
	{
		Component: layoutWrap(EmptyLayout, ProfilePage),
		pathName: 'Login',
		isNested: false,
		urlPath: '/login'
	},
	{
		Component: layoutWrap(EmptyLayout, SignupPage),
		pathName: 'Signup',
		urlPath: '/signup',
		isNested: false
	},
	{
		Component: layoutWrap(BaseLayout, CartPage),
		pathName: 'Cart',
		urlPath: '/cart',
		isNested: false
	},
	{
		Component: layoutWrap(BaseLayout, NotFound),
		isNested: false,
		pathName: 'NotFound',
		urlPath: '*'
	}
];

export default routes;
