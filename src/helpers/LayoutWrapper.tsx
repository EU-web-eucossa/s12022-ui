/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

import Protected from '../components/Protected';
import React from 'react';

type Lmap = (
	LayoutContainer: React.FC<{
		children: JSX.Element;
	}>,
	Component: React.FC | React.ElementType,
	isProtected?:
		| boolean
		| {
				role: string;
		}
) => JSX.Element;

const layoutWrap: Lmap = (
	LayoutContainer: React.FC<{ children: JSX.Element }>,
	Component: React.FC | React.ElementType,
	isProtected = false
) => {
	const { role } = isProtected as { role: string };

	return (
		<LayoutContainer>
			{isProtected ? (
				<Protected role={role ? role : ''}>
					<Component />
				</Protected>
			) : (
				<Component />
			)}
		</LayoutContainer>
	);
};

export default layoutWrap;
