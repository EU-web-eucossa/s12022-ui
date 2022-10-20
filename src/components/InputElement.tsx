import React from 'react';

type InputType = 'text' | 'password' | 'email';

type PropsTypes = {
	placeholder: string;
	type: InputType;
	name: string;
};
const InputElement = (props: PropsTypes) => {
	return (
		<div>
			<input
				className="border border-slate-300 px-4 rounded-md w-full focus:outline-none focus:ring-0"
				name={props.name}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default InputElement;
