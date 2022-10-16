import React from 'react';

const Footer = () => {
	return (
		<div className="bg-black w-full min-h-[10rem] p-4">
			<div className="max-w-7xl mx-auto text-white text-center">
				copyright @eucossa{new Date().getFullYear()}
			</div>
		</div>
	);
};

export default Footer;