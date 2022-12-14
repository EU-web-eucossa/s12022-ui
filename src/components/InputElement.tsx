import { InputPropsTypes } from '../types';
import React from 'react';

const InputElement = (props: InputPropsTypes) => {
	return (
		<div className='bg-white tex-[12px]'>
			<input
				className="border text-[12px] border-slate-300 px-4 rounded-md w-full focus:outline-none focus:ring-0 bg-transparent"
				{...props}
			/>
		</div>
	);
};

export default InputElement;
