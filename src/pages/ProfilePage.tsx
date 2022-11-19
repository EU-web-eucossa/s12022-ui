import React from 'react';
import { useAppSelector } from '../state/hooks';

const ProfilePage = () => {
	const { user } = useAppSelector((state) => state.root.user);

	return (
		<div className="flex items-center justify-center flex-col">
			<img src={user?.profilePic} alt={user?.name} className="rounded-full my-8"/>
			<h1>Welcome to your profile {user?.name}</h1>
			<div className="flex items-cente gap-4 w-full p-4 shadow-sm justify-center">
				Serving role as{' '}
				{user?.role.toLowerCase() === 'user' ? (
					<div className="text-green-500"> Customer client</div>
				) : (
					<div className="bg-red-400 px-4 rounded text-white"> Admin client</div>
				)}
			</div>
			<p>
				Email: <span className="text-primary">{user?.email}</span>
			</p>
		</div>
	);
};

export default ProfilePage;
