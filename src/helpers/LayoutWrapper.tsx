/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

import Protected from '../components/Protected';
import React from 'react';

type Lmap = (
	LayoutContainer: React.FC<{
		children: JSX.Element;
	}>,
	Component: React.FC | React.ElementType,
	isProtected?: boolean
) => JSX.Element;

const layoutWrap: Lmap = (
	LayoutContainer: React.FC<{ children: JSX.Element }>,
	Component: React.FC | React.ElementType,
	isProtected = false
) => {
	return (
		<LayoutContainer>
			{isProtected ? (
				<Protected>
					<Component />
				</Protected>
			) : (
				<Component />
			)}
		</LayoutContainer>
	);
};

export default layoutWrap;
