/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */

import Protected from '../components/Protected';
import React from 'react';
import RoleProtected from '../components/RoleProtected';
import TopScroll from './TopScroll';

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
			<>
				<TopScroll />
				{isProtected ? <Protected>{<Component />}</Protected> : <Component />}
			</>
		</LayoutContainer>
	) : (
		<LayoutContainer>
			<>
				<TopScroll />
				<Protected>
					<RoleProtected role={isProtected.role}>
						<Component />
					</RoleProtected>
				</Protected>
			</>
		</LayoutContainer>
	);
};

export default layoutWrap;
