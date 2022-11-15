export interface IProduct {
	featuredImage: string | undefined;
	name: string;
	ratings: number;
	id: number | string;
	title: string;
	description: string;
	price: number;
	discountPercentage?: number;
	stock: number;
	brand?: string;
	category: string;
	thumbnail?: string;
	images: Array<string>;
}
