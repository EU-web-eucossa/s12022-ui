/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 10:19:31
 * @ Description:
 */

import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../state/hooks';

type Props = {
	children: JSX.Element;
	role?: string;
};

const RoleProtected = (props: Props) => {
	const { user } = useAppSelector((state) => state.root.user);

	return props.role?.toLowerCase() === user?.role.toLowerCase() ? (
		props.children
	) : (
		<Navigate to={'/'} replace />
	);
};

export default RoleProtected;
