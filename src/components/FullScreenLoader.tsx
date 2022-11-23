/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-20 09:57:01
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 23:49:04
 * @ Description:
 */

import React from 'react';

const FullScreenLoader = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="flex flex-col items-center justify-center space-y-4">
				<div className="w-12 h-12 border-4 border-t-4 border-r-green-700 border-t-yellow-700 border-l-blue-700 border-b-red-700 rounded-full animate-spin"></div>
				<div className="text-gray-500">Loading...</div>
			</div>
		</div>
	);
};

export default FullScreenLoader;
