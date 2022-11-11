/* eslint-disable react/no-unescaped-entities */
import { AxiosError } from 'axios';
import InputElement from '../components/InputElement';
import { Link } from 'react-router-dom';
import PasswordElement from '../components/PasswordElement';
import React from 'react';
import { authQuery } from '../api';

type UserDataInputs = {
	email: string;
	password: string;
	username: string;
};

const SignupPage = () => {
	const [userData, setUserData] = React.useState<UserDataInputs>(
		{} as UserDataInputs
	);
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		e.preventDefault();
		setUserData((initial) => ({ ...initial, [e.target.name]: e.target.value }));
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		if (userData.email && userData.password) {
			try {
				const res = await authQuery.post('/register', userData);
				console.log(res.data);
			} catch (err) {
				if (err instanceof AxiosError) console.log(err);
			}
		}
	};

	return (
		<div className="flex justify-center items-center mt-10 flex-col h-full">
			<form
				className="flex flex-col mt-5 gap-4 sm:m-8 px-4 w-full bg-white p-5 md:p-12 rounded-md max-w-[40rem]"
				onSubmit={async (e) => handleSubmit(e)}
			>
				<div>
					<img
						src="/logo.svg"
						alt=""
						className="mx-auto h-30 w-30 object-cover"
					/>
				</div>
				<InputElement
					placeholder={'Username'}
					type={'text'}
					name={'username'}
					value={userData['username']}
					onChange={handleChange}
				/>
				<InputElement
					placeholder={'Email address'}
					type={'email'}
					name={'email'}
					onChange={handleChange}
					value={userData['email']}
				/>
				<PasswordElement
					placeholder={'Password'}
					name={'password'}
					value={userData['password']}
					type="password"
					onChange={handleChange}
				/>

				<button
					className="mb-3 rounded-full bg-primary p-2 font-bold"
					type="submit"
				>
					Sign Up
				</button>
			</form>
			<p className="mb-7 text-center">
				Already have an account?{' '}
				<Link to={'/login'} className="text-primary">
					Sign in
				</Link>
			</p>
		</div>
	);
};

export default SignupPage;
