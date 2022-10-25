import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className="bg-black w-full min-h-[10rem] p-4">
			<img src="/logo.png" alt="" className="w-10 h-10 md:w-36 md:h-36 m-auto" />
			<div className="max-w-7xl mx-auto text-white capitalize flex flex-col justify-center text-center">
				<div className="flex justify-center gap-2 p-2">
					<a href="/">Home</a>
					<a href="#/about">About</a>
					<a href="#/categories">Categories</a>
					<a href="#/contact">Contacts</a>
					<a href="#/signup">Sign Up</a>
				</div>
				<div className="flex justify-center gap-2 p-2">
					<a href="#">{
						<FontAwesomeIcon icon={faFacebook} className="text-xl md:text-2xl  p-1" />
					}</a>
					<a href="#">{
						<FontAwesomeIcon icon={faTwitter} className="text-xl md:text-2xl p-1" />
					}</a>
					<a href="#">{
						<FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl p-1" />
					}</a>
				</div>
				<p className="p-1">copyright @{new Date().getFullYear()}. All Rights Reserved. <a href="/#" className="text-primary"> GrabMe</a></p>
			</div>
		</div>
	);
};

export default Footer;
