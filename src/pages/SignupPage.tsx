/* eslint-disable react/no-unescaped-entities */
import { AxiosError } from 'axios';
import InputElement from '../components/InputElement';
import PasswordElement from '../components/PasswordElement';
import React from 'react';
import { authQuery } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

type UserDataInputs = {
	email: string;
	password: string;
	name: string;
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
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState<boolean>(false);
	const [success, setSuccess] = React.useState<boolean>(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		if (userData.email && userData.password) {
			setLoading(true);

			try {
				const res = await authQuery.post('/register', userData);
				toast.success(res.data.user.message);
				setSuccess(true);
				setTimeout(() => {
					navigate('/account/sign-in');
				}, 2000);
			} catch (err) {
				if (err instanceof AxiosError) 
					toast.error(err.response?.data);
				
			} finally {
				setLoading(false);
			}

			return;
		}
		toast.error('Please fill all the fields');
	};

	return (
		<div className="flex justify-center items-center mt-10 flex-col h-full">
			{success ? (
				<div className='h-full w-full flex items-center justify-center gap-3 flex-col'>
					<h1 className="text-2xl font-bold">Account Created</h1>
					<p className="text-gray-500">Redirecting to login page...</p>
				</div>
			) : (
				<form
					className="flex flex-col mt-5 gap-4 sm:m-8 px-4 w-full bg-white p-5 md:p-12 rounded-md max-w-[40rem]"
					onSubmit={async (e) => handleSubmit(e)}
				>
					<ToastContainer />
					<div>
						<img
							src="/logo.svg"
							alt=""
							className="mx-auto h-30 w-30 object-cover"
						/>
					</div>
					<InputElement
						placeholder={'name'}
						type={'text'}
						name={'name'}
						value={userData['name']}
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
						className={`mb-3 rounded-full bg-primary p-2 font-bold ${
							loading && 'animate-pulse'
						}`}
						type="submit"
						disabled={loading}
					>
						{loading ? 'Loading....' : 'Sign Up'}
					</button>
					<p className="mb-7 text-center">
						Already have an account?{' '}
						<Link to={'/account/sign-in'} className="text-primary">
							Sign in
						</Link>
					</p>
					<Link to={'/'} className="text-center underline text-blue-700">
						Continue shoppping
					</Link>
				</form>
			)}
		</div>
	);
};

export default SignupPage;
