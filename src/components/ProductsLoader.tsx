import React from 'react';

const ProductsLoader = () => {
	return (
		<div className="p-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
			{Array(10)
				.fill('**', 2)
				.map((item, i) => (
					<div key={i} className="w-full flex flex-col gap-1 border p-2 rounded">
						<div className='h-64 bg-slate-200 rounded animate-pulse'></div>
						<div className='flex flex-col gap-2'>
							{[1, 2, 3].map((i) => (
								<div key={i} className="w-full h-5 bg-slate-200 rounded-md animate-pulse" ></div>
							))}
						</div>
					</div>
				))}
		</div>
	);
};

export default ProductsLoader;
