/* eslint-disable react/no-unescaped-entities */
import InputElement from '../components/InputElement';
import { Link } from 'react-router-dom';
import PasswordElement from '../components/PasswordElement';
import React from 'react';

const LoginPage = () => {
	return (
		<div className="flex justify-center items-center mt-10 flex-col h-full">
			<form className="flex flex-col mt-5 gap-4 sm:m-8 px-4 w-full bg-white p-5 md:p-12 rounded-md max-w-[40rem]">
				<div>
					<img
						src="/logo.svg"
						alt=""
						className="mx-auto h-30 w-30 object-cover"
					/>
				</div>
				<InputElement
					placeholder={'User Name/Email'}
					type={'email'}
					name={'email'}
				/>
				<PasswordElement placeholder={'Password'} name={'password'} />
				<div className="flex items-center gap-5">
					<input
						className=""
						type="checkbox"
						id="rememberMe"
						name="rememberMe"
						value="remember"
					/>
					<label htmlFor="vehicle3"> Remember Me</label>
				</div>
				<button className="mb-3 rounded-full bg-primary p-2" type="submit">
					Sign In
				</button>
			</form>
			<p className="mb-7 text-center">
				Don't have an account?{' '}
				<Link to={'/signup'} className="text-primary font-bold">
					Sign up
				</Link>
			</p>
		</div>
	);
};

export default LoginPage;
