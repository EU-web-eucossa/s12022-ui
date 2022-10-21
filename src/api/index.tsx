import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/naming-convention
const BASE_URL = 'https://dummyjson.com';

export const apiEndpoints = {
	products: `${BASE_URL}/products`,
	search: `${BASE_URL}/products/search`,
	categories: `${BASE_URL}/products/categories`
};

export const axiosQuery = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'Application/json'
	}
});
