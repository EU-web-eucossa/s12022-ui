import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type PropsTypes = {
	placeholder: string;
	name: string;
};
const PasswordElement = (props:PropsTypes) => {
	const [show,setShow] = React.useState<boolean>(false);
 
	return (
		<div className='flex items-center border border-slate-300 px-2 rounded-md'>
			<input
				className="w-full border-none outline-none focus:ring-0"
				name={props.name}
				type={show?'text':'password'}
				placeholder={props.placeholder}
			/>
			<button onClick={function(e){
				e.preventDefault();
				setShow(!show);
			}}><FontAwesomeIcon icon={show?faEye:faEyeSlash}/></button>
		</div>
	);

};

export default PasswordElement;