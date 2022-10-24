export interface IProduct {
	featuredImage: string | undefined;
	name: ReactNode;
	ratings(ratings: any): unknown;
	id: number | string;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: Array<string>;
}
