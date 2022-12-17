/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 05:38:49
 * @ Description:
 */

import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/naming-convention
const BASE_URL = 'https://inventory-jop4.onrender.com/api/v1';

export const apiEndpoints = {
	products: `${BASE_URL}/products`,
	search: `${BASE_URL}/products/search`,
	categories: `${BASE_URL}/products/categories`
};

const authURL = 'https://auth-service-r5fy.onrender.com/api/v1/auth';

export const axiosQuery = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'Application/json'
	}
});

export const authQuery=axios.create({
	baseURL: authURL,
	headers: {
		'Content-Type': 'Application/json'
	}
});
