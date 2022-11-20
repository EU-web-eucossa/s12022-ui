/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

import Protected from '../components/Protected';
import React from 'react';
import RoleProtected from '../components/AdminProtected';

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
	return typeof isProtected === 'boolean' ? (
		<LayoutContainer>
			{isProtected ? <Protected>{<Component />}</Protected> : <Component />}
		</LayoutContainer>
	) : (
		<LayoutContainer>
			<Protected>
				<RoleProtected role={isProtected.role}>
					<Component />
				</RoleProtected>
			</Protected>
		</LayoutContainer>
	);
};

export default layoutWrap;
