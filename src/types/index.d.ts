/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type ProductsStateType = {
	products: ProductEntityType[];
	loading: boolean;
	error: string | null;
};

export type ProductEntityType = {
	name: string;
	category: any;
	price: number;
	inStock: boolean;
	featuredImage: string;
	images: Array<string>;
	ratings: number;
	quantity: number;
	description: string;
	_id: string;
};

export type ProductCategoriesStateType = {
	categories: ProductcategoryType[];
	loading: boolean;
	error: string | null;
};

type UserType = {
	email: string;
	name: string;
	role: string;
	profilePic?: string;
};

export type UserStateType = {
	user: UserType | null;
	isAuthenticated: boolean;
	loading: boolean;
	error: string | null;
	token: string | null;
};

type CartProductType = ProductEntityType & {
	quantity: number;
};

export type CartStateType = {
	cartProducts: CartProductType[];
	totalPrice: number;
	totalQuantity: number;
};

type WhiteListStateType = {
	products: ProductEntityType[];
};

export type PurchasePaypalItemType = {
	name: string;
	unit_amount: {
		currency_code: string;
		value: string;
	};
	quantity: string;
};

export type InputType = 'text' | 'password' | 'email';

export type InputPropsTypes = {
	placeholder: string;
	type: InputType;
	name: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
};

export type ProductcategoryType = {
	name: string;
	description: string;
	image: string;
	_id: string;
};
