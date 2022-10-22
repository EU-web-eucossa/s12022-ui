/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import TopScroll from '../helpers/TopScroll';
import routes from './routes';
import { HashRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
	return (
		<HashRouter>
			<TopScroll />
			<Routes>
				{routes.map(
					({
						Component: MComponent,
						isNested: MIsNested,
						pathName: MPathname,
						urlPath: MUrlPath,
						children: MChildren
					}) => {
						return MIsNested ? (
							<Route path={MUrlPath} element={MComponent}>
								{MChildren?.map(
									({
										Component: C1Component,
										isNested: C1IsNested,
										urlPath: C1UrlPath,
										children: C1Children
									}) => {
										return C1IsNested ? (
											<Route path={C1UrlPath} element={C1Component}>
												{C1Children?.map(
													({ Component: C2Component, urlPath: C2UrlPath }) => {
														return (
															<Route
																key={C2UrlPath}
																path={C2UrlPath}
																element={C2Component}
															/>
														);
													}
												)}
											</Route>
										) : (
											<Route path={C1UrlPath} element={C1Component} />
										);
									}
								)}
							</Route>
						) : (
							<Route path={MUrlPath} element={MComponent} key={MPathname} />
						);
					}
				)}
			</Routes>
		</HashRouter>
	);
};

export default AppRouter;
