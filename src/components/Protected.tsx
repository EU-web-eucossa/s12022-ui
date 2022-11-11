import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../state/hooks';
import { useLocation } from 'react-router-dom';

type Props = {
	children: JSX.Element;
};

const Protected = (props: Props) => {
	const { isAuthenticated } = useAppSelector((state) => state.root.user);

	const path = useLocation().pathname;

	return isAuthenticated ? (
		props.children
	) : (
		<Navigate to={'/account/sign_in'} state={{ from: path }} replace />
	);
};

export default Protected;
