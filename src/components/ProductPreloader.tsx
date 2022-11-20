import React from 'react';

// Create a preloader component that will be used to display a loading animation before products are fetched
const ProductPreloader = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="w-12 h-12 border-4 border-t-4 border-gray-500 rounded-full animate-spin"></div>
			<div className="text-gray-500">Loading...</div>
		</div>
	);
};

export default ProductPreloader;
