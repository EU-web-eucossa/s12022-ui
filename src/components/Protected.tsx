/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-15 11:22:06
 * @ Modified by: Felix Orinda
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 11:21:11
 */

import { AxiosError } from 'axios';
import FullScreenLoader from './FullScreenLoader';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { UserType } from '../types';
import { authQuery } from '../api';
import { useLocation } from 'react-router-dom';
import { loginUser, logoutUser } from '../state/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';

type Props = {
	children: JSX.Element;
};

const Protected = (props: Props) => {
	const { isAuthenticated, token, ...prop } = useAppSelector(
		(state) => state.root.user
	);
	const user = prop.user as UserType;
	const dispatch = useAppDispatch();
	const path = useLocation().pathname;
	const [loading, setLoading] = React.useState(false);
	const fetchUserProfile = async () => {
		try {
			setLoading(true);
			const response = await authQuery.get('/profile', {
				// withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`
				}
			});
			const data = response.data;
			if (response.status !== 200) {
				dispatch(logoutUser());

				return;
			}

			const { email, name, profilePic, role } = data.user as UserType;
			dispatch(loginUser({ user: { email, name, profilePic, role }, token }));
		} catch (error) {
			if (error instanceof AxiosError) dispatch(logoutUser());
		} finally {
			setLoading(false);
		}
	};
	React.useEffect(() => {
		isAuthenticated && fetchUserProfile();
	}, []);

	return loading ? (
		<FullScreenLoader />
	) : loading === false ? (
		isAuthenticated === true && user.role ? (
			props.children
		) : (
			<Navigate to={'/account/sign-in'} state={{ from: path }} replace />
		)
	) : null;
};

export default Protected;
