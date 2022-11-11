import { InputPropsTypes } from '../types';
import React from 'react';


const InputElement = (props: InputPropsTypes) => {
	return (
		<div className=''>
			<input
				className="border border-slate-300 px-4 rounded-md w-full focus:outline-none focus:ring-0 bg-white"
				{...props}
			/>
		</div>
	);
};

export default InputElement;
