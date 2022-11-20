/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-19 10:41:07
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-20 10:55:15
 * @ Description:
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type TableColumnProps = {
	[key: string]: any;
	id: string | number;
	_id?: string;
	title: string;
	element?: (data: any) => JSX.Element;
	columnName: string;
	customElement: boolean;
};

export type RowProps = {
	[key: string]: any;
};

type Props = {
	[key: string]: any;
	columns: TableColumnProps[];
	rows: RowProps[];
};
const Table = ({ columns, rows, ...props }: Props) => {
	const id  = React.useId();

	return (
		<table {...props}>
			<thead>
				<tr className="font-bold uppercase bg-slate-200">
					{columns.map((c) => (
						<th
							key={c.title + c.id + Math.random().toString().slice(2, 5)}
							className="border border-slate-300 px-4 py-4"
						>
							{c.title}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="w-full text-sm">
				{rows.map((data, index) => {
					return (
						<tr key={id + index} className="even:bg-slate-100">
							{columns.map((col) =>
								col.element ? (
									<td
										key={col.columnName + data.id}
										className="border px-4 py-4"
									>
										<col.element
											key={data[col.columnName] + data.id}
											data={data}
										/>
									</td>
								) : (
									<td
										key={col.columnName + data.id}
										className="border px-4 py-4"
									>
										{data[col.columnName]}
									</td>
								)
							)}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
