export interface IProduct {
	name: string;
	color?: string | string[];
	price: number;
    featured:boolean
	quantity: number;
	inStock: boolean;
	ratings: number;
	description: string;
	sizes?: string | string[];
	category: CategoryType;
	featuredImage: string;
	images?: string[];
	reviews: IReview[];
}

export type CategoryType =
	| 'clothes'
	| 'sports-wear'
	| 'Airpods'
	| 'Shoes'
	| 'Smartphones'
	| 'Speakers'
	| 'Headphones'
	| 'Television'
	| 'SmartWatch';

export interface IReview {
	author: string;
	text: string;
	date: Date;
}
