import { IProduct } from '../interfaces/product';

export type ProductsStateType = {
	products: IProduct[];
	loading: boolean;
	error: string | null;
};

export type UserStateType = {
	user: IUser | null;
    isAuthenticated: boolean;
	loading: boolean;
	error: string | null;
};

export type CartStateType = {
	products: IProduct[];
	totalPrice: number;
	totalQuantity: number;
};
