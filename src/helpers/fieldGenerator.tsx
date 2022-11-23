/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const fieldGenerator = (props: {
	name: string;
	label: string;
	value: string;
	placeholder: string;
	type: 'text' | 'number' | 'email' | 'password' | 'url';
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	pattern?: string;
	min?: number;
	max?: number;

	[key: string]: any;
}) => (
	<div key={props.name} className="flex flex-col w-full">
		<label htmlFor={props.name} className="capitalize font-medium">
			{props.label}
		</label>
		<input
			required={props.required}
			type={props.type}
			placeholder={props.placeholder}
			name={props.name}
			id={props.name}
			value={props.value}
			onChange={props.onChange}
			className="border border-gray-300 rounded-md p-2 w-full focus:ring-0 focus:border-[1px]"
		/>
	</div>
);
