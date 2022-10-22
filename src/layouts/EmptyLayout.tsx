import React from 'react';

const EmptyLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<div className="w-full bg-slate-200 p-10">
			<div className="max-w-7xl mx-auto min-h-screen no-scrollbar">
				{children}
			</div>
		</div>
	);
};

export default EmptyLayout;
