import { IProduct } from '../interfaces/product';

export type ProductsStateType = {
	products: IProduct[];
	loading: boolean;
	error: string | null;
};

export type ProductCategoriesStateType = {
	categories: string[];
	loading: boolean;
	error: string | null;
};

export type UserStateType = {
	user: IUser | null;
	isAuthenticated: boolean;
	loading: boolean;
	error: string | null;
};

type CartProductType = IProduct & {
	quantity: number;
};

export type CartStateType = {
	cartProducts: CartProductType[];
	totalPrice: number;
	totalQuantity: number;
};

type WhiteListStateType = {
	products: IProduct[];
}

export type PurchasePaypalItemType = {
	name:string,
	unit_amount: {
		currency_code:string,
		value: string
	},
	quantity: string
}