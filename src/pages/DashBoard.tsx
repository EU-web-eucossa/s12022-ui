/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 05:37:40
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-19 05:38:19
 * @ Description:
 */

import { Outlet } from 'react-router-dom';
import React from 'react';

const DashBoard = () => {
	return (
		<div>
			<div></div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default DashBoard;
