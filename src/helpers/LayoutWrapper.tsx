/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

type Lmap = (
	LayoutContainer: React.FC<{
		children: JSX.Element;
	}>,
	Component: React.FC|React.ElementType
) => JSX.Element;

const layoutWrap: Lmap = (
	LayoutContainer: React.FC<{ children: JSX.Element }>,
	Component: React.FC | React.ElementType
) => {
	return (
		<LayoutContainer>
			<Component />
		</LayoutContainer>
	);
};

export default layoutWrap;
