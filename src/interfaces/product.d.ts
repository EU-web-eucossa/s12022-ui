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
	| 'food'
	| 'sports wear'
	| 'blouses'
	| 'shirts'
	| 'jordan'
	| 'sneakers';

export interface IReview {
	author: string;
	text: string;
	date: Date;
}
