import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

type Props = {
	children: JSX.Element| JSX.Element[]
};

const BaseLayout = (props: Props) => {
	return (
		<div>
			<Header />
			<div className="max-w-7xl mx-auto min-h-screen px-2 md:px-4">{props.children}</div>
			<Footer />
		</div>
	);
};

export default BaseLayout;
