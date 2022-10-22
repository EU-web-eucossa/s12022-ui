/* eslint-disable react/no-unescaped-entities */
import InputElement from '../components/InputElement';
import { Link } from 'react-router-dom';
import PasswordElement from '../components/PasswordElement';
import React from 'react';

const SignupPage = () => {
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
					placeholder={'Username'}
					type={'text'}
					name={'username'}
				/>
				<InputElement
					placeholder={'Email address'}
					type={'email'}
					name={'email'}
				/>
				<PasswordElement placeholder={'Password'} name={'password'} />
				
				<button className="mb-3 rounded-full bg-primary p-2 font-bold" type="submit">
					Sign Up
				</button>
			</form>
			<p className="mb-7 text-center">
				Don't have an account?{' '}
				<Link to={'/login'} className="text-primary">
					Sign in
				</Link>
			</p>
		</div>
	);
};

export default SignupPage;
