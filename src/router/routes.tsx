import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import CategoriesPage from '../pages/CategoriesPage';
import ContactPage from '../pages/ContactPage';
import Homepage from '../pages/Homepage';
import { IRouteProps } from '../interfaces/router';
import LoginPage from '../pages/LoginPage';
import NotFound from '../pages/NotFound';
import React from 'react';
import SignupPage from '../pages/SignupPage';
import SingleProductPage from '../pages/SingleProductPage';

const routes: IRouteProps[] = [
	{
		Component: <Homepage />,
		isNested: false,
		pathName: 'Home',
		urlPath: '/'
	},
	{
		Component: <SingleProductPage />,
		isNested: false,
		pathName: 'SingleProductPage',
		urlPath: '/product/:id'
	},
	{
		Component: <CategoriesPage />,
		isNested: false,
		pathName: 'categories',
		urlPath: '/categories'
	},
	{
		Component: <AboutPage />,
		isNested: false,
		pathName: 'About',
		urlPath: '/about'
	},
	{
		Component: <ContactPage />,
		isNested: false,
		pathName: 'Contact',
		urlPath: '/contact'
	},
	{
		Component: <LoginPage />,
		pathName: 'Login',
		isNested:false,
		urlPath: '/login'
	},
	{
		Component: <SignupPage />,
		pathName: 'Signup',
		urlPath: '/signup',
		isNested:false
	},
	{
		Component: <CartPage />,
		pathName: 'Cart',
		urlPath: '/cart',
		isNested: false
	},
	{
		Component: <NotFound />,
		isNested: false,
		pathName: 'NotFound',
		urlPath: '*'
	}
];

export default routes;
