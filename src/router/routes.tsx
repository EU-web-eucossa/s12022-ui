import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Homepage from '../pages/Homepage';
import { IRouteProps } from '../interfaces/router';
import NotFound from '../pages/NotFound';
import React from 'react';

const routes: IRouteProps[] = [
	{
		Component: <Homepage/>,
		isNested: false,
		pathName: 'Home',
		urlPath: '/'
	},
	{
		Component: <AboutPage/>,

		isNested: false,
		pathName: 'About',
		urlPath: '/about'
	},
	{
		Component: <ContactPage/>,
		isNested: false,
		pathName: 'Contact',
		urlPath: '/contact'
	},
	{
		Component: <NotFound/>,
		isNested: false,
		pathName: 'NotFound',
		urlPath: '*'
	}
];

export default routes;
