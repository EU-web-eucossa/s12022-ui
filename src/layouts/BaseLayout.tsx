import Header from '../components/Header';
import React from 'react';

type Props = {
	children: JSX.Element;
};

const BaseLayout = (props: Props) => {
	return (
		<div>
			<Header />
			<div>{props.children}</div>
			<div>Footer</div>
		</div>
	);
};

export default BaseLayout;
