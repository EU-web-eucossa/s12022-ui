/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputPropsTypes } from '../types';
import React from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordElement = ({ type: _, ...props }: InputPropsTypes) => {
	const [show, setShow] = React.useState<boolean>(false);

	return (
		<div className="flex items-center border border-slate-300 px-2 rounded-md bg-white focus:border-slate-300">
			<input
				className="w-full border-none outline-none focus:ring-0"
				type={show ? 'text' : 'password'}
				{...props}
			/>
			<button
				onClick={function (e) {
					e.preventDefault();
					setShow(!show);
				}}
				className="text-placeholder"
			>
				<FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
			</button>
		</div>
	);
};

export default PasswordElement;
