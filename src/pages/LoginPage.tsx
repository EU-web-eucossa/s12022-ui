/* eslint-disable react/no-unescaped-entities */
import InputElement from '../components/InputElement';
import PasswordElement from '../components/PasswordElement';
import React from 'react';

const LoginPage = () => {
	return (
		<div className="container flex justify-center mt-10">
			<div className="w-full sm:w-full md:w-2/4 font-medium">
				<form className="flex flex-col mt-5 gap-4 sm:m-8 px-4">
					<InputElement
						placeholder={'User Name/Email'}
						type={'email'}
						name={'email'}
					/>
					<PasswordElement placeholder={'Password'} name={'password'} />
					<div className="flex items-center gap-5">
						<input
							className="checked:bg-primary rounded-full w-5"
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
					<a href="#/signup" className="text-primary">
						Sign up
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginPage;
