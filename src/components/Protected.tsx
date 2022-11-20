/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 22:30:34
 */
import { Navigate } from 'react-router-dom';
import React from 'react';
import { UserType } from '../types';
import { useAppSelector } from '../state/hooks';
import { useLocation } from 'react-router-dom';

type Props = {
	children: JSX.Element;
};

const Protected = (props: Props) => {
	const { isAuthenticated, ...prop } = useAppSelector(
		(state) => state.root.user
	);
	const user = prop.user as UserType;
	const path = useLocation().pathname;

	return isAuthenticated === true && user.role ? (
		props.children
	) : (
		<Navigate to={'/account/sign-in'} state={{ from: path }} replace />
	);
};

export default Protected;
