import fakeData from "../../../assets/VOLUNTEER_MOCK_DATA.json";
import {
	useTable,
	useSortBy,
	usePagination,
	useFilters,
	useGlobalFilter,
	useAsyncDebounce,
} from "react-table";
import { useMemo, useState } from "react";

function GlobalFilter({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<span>
			Search all entries:{" "}
			<input
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} records...`}
			/>
		</span>
	);
}

function fuzzyTextFilterFn(rows, id, filterValue) {
	return matchSorter(rows, filterValue, { keys: [(row) => row.value[id]] });
}

const ContactTable = () => {
	const data = useMemo(() => fakeData, []);
	const columns = useMemo(
		() => [
			{
				Header: "ID",
				accessor: "id",
			},
			{
				Header: "First Name",
				accessor: "first_name",
			},
			{
				Header: "Last Name",
				accessor: "last_name",
			},
			{
				Header: "Email",
				accessor: "email",
			},
			{
				Header: "Role",
				accessor: "role",
			},
			{
				Header: "Volunteer Level",
				accessor: "level",
			},
		],
		[]
	);

	const filterTypes = useMemo(() => ({
		fuzzyText: fuzzyTextFilterFn,
		text: (rows, id, filterValue) => {
			return rows.filter((row) => {
				const rowValue = row.value[id];
				return rowValue !== undefined
					? String(rowValue)
							.toLowerCase()
							.startsWith(String(filterValue).toLowerCase())
					: true;
			});
		},
	}));

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		pageOptions,
		pageCount,
		gotoPage,
		previousPage,
		nextPage,
		setPageSize,
		canPreviousPage,
		canNextPage,
		visibleColumns,
		preGlobalFilteredRows,
		setGlobalFilter,
		state,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			filterTypes,
			initialState: { pageIndex: 0 },
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	return (
		<div className='overflow-y-scroll'>
			<table
				className='w-[800px] h-[800px] border-collapse overflow-hidden shadow mx-auto'
				{...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr
							className='bg-gray-300 z-10 text-white'
							{...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									className='z-10'
									{...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? " 🔽"
												: " 🔼"
											: ""}
									</span>
								</th>
							))}
						</tr>
					))}
					<tr>
						<th colSpan={visibleColumns.length}>
							{/* <GlobalFilter
								preGlobalFilteredRows={preGlobalFilteredRows}
								globalFilter={state.globalFilter}
								setGlobalFilter={setGlobalFilter}
							/> */}
						</th>
					</tr>
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr
								className='hover:bg-gray-300/50 cursor-pointer'
								{...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td
										className='p-4 relative hover:before:absolute hover:before:bg-gray-200/70 hover:before:left-0 hover:before:right-0 hover:before:-top-[9999px] hover:before:-bottom-[9999px] hover:before:z-0'
										{...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* Pagination  */}
			<div>
				<button
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}>
					{"<<"}
				</button>{" "}
				<button
					onClick={() => previousPage()}
					disabled={!canPreviousPage}>
					{"< "}
				</button>{" "}
				<button
					onClick={() => nextPage()}
					disabled={!canNextPage}>
					{"> "}
				</button>{" "}
				<button
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}>
					{">> "}
				</button>{" "}
				<span>
					Page <strong>{pageIndex + 1}</strong> of {pageOptions.length}
				</span>
				<span>
					{" "}
					| Go to page:{" "}
					<input
						type={"number"}
						defaultValue={pageIndex + 1}
						onChange={(e) => {
							const page = e.target.value ? Number(e.target.value) - 1 : 0;
							gotoPage(page);
						}}
					/>
				</span>
				<select
					value={pageSize}
					onChange={(e) => setPageSize(Number(e.target.value))}>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option
							key={pageSize}
							value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default ContactTable;
