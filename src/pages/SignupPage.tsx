import InputElement from '../components/InputElement';
import PasswordElement from '../components/PasswordElement';
import React from 'react';

const SignupPage = () => {
	return (
		<div className="container flex justify-center mt-10">
			<div className="w-full sm:w-full md:w-2/4 font-medium">
				<form className="flex flex-col justify-center mt-5 sm:m-8 gap-4">
					<InputElement placeholder={'First Name'} type={'text'} name={'FirstName'} />
					<InputElement placeholder={'LastName'} type={'text'} name={'LastName'} />
					<InputElement placeholder={'Email Address'} type={'email'} name={'email'} />
					<PasswordElement placeholder={'Password'} name={'password'} />
					
					<button className="mb-3 rounded-full bg-primary p-2" type="submit">
						Sign In
					</button>
				</form>
				<p className="mb-7 text-center">
					Already have an account?{' '}
					<a href="#/login" className="text-primary">
						Log in
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignupPage;
