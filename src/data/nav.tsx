import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
	faHome,
	faPhone,
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

type NavType = {
	name: string;
	path: string;
	icon: IconDefinition;
	children?: NavType[];
};

const navLinks: NavType[] = [
	{
		name: 'Home',
		path: '/',
		icon: faHome
	},
	{
		name: 'category',
		path: '/category',
		icon: faShoppingCart
	},
	{
		name: 'About',
		path: '/about',
		icon: faHome
	},
	{
		name: 'Contact',
		path: '/contact',
		icon: faPhone
	},
	{
		name: 'Cart',
		path: '/cart',
		icon: faShoppingCart
	}
];

export default navLinks;
