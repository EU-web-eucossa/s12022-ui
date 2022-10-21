import React from 'react';

const About = () => {
	return <div className='text-primary border border-black p-4'>
		<h1>hello about page</h1>
		<div className='flex gap-2 flex-wrap'>
			{[1,2,3].map(p=><div key={p} className='min-w-[20rem] w-full h-48 bg-placeholder'></div>)}
		</div>
	</div>;
};

export default About;
