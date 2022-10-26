/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const OfflineComponent = () => {
	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className='flex h-screen w-screen items-center justify-center flex-col gap-4'>
			<h1>Looks like you're offline</h1>
			<button className='block bg-blue-600 text-white rounded-lg px-10 py-1'
				onClick={(e) => {
					e.preventDefault();
					reloadPage();
				}}
			>
				Retry
			</button>
		</div>
	);
};

export default OfflineComponent;
