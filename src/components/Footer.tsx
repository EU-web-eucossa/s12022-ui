/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-10 13:55:28
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-26 08:36:38
 * @ Description:
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className="bg-black w-full min-h-[10rem] p-4">
			<img src="/logo.png" alt="" className="w-10 h-10 md:w-36 md:h-36 m-auto" />
			<div className="max-w-7xl mx-auto text-white capitalize flex flex-col justify-center text-center">
				<div className="flex justify-center gap-2 p-2">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/categories">Categories</Link>
					<Link to="/contact">Contacts</Link>
					<Link to="/signup">Sign Up</Link>
				</div>
				<div className="flex justify-center gap-2 p-2">
					<Link to="#">{
						<FontAwesomeIcon icon={faFacebook} className="text-xl md:text-2xl  p-1" />
					}</Link>
					<Link to="#">{
						<FontAwesomeIcon icon={faTwitter} className="text-xl md:text-2xl p-1" />
					}</Link>
					<Link to="#">{
						<FontAwesomeIcon icon={faLinkedin} className="text-xl md:text-2xl p-1" />
					}</Link>
				</div>
				<p className="p-1">copyright @{new Date().getFullYear()}. All Rights Reserved. <Link to="/#" className="text-primary"> GrabMe</Link></p>
			</div>
		</div>
	);
};

export default Footer;
