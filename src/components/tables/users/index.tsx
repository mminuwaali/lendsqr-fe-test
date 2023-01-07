import './style.scss';
import * as cards from '../../cards';
import * as forms from '../../forms';
import { usersDataTable } from '../../../data';
import { UserContext } from '../../../contexts';
import sort from '../../../assets/icons/sort.svg';
import type { tablesType, } from '../../../vite-env';
import { ReactElement, useMemo, useContext, ChangeEventHandler, Fragment } from 'react';
import { useTable, useSortBy, HeaderGroup, usePagination, UsePaginationOptions, TableOptions, UseTableHeaderGroupProps, TableHeaderGroupProps } from 'react-table';

export default (): ReactElement<HTMLTableElement> => {
    // context
    const d = useContext(UserContext);

    // memo
    const data = useMemo(() => d || [], []);
    const columns = useMemo(() => usersDataTable, []);

    //  react table hook
    const {
        headerGroups, rows,
        getTableProps, getTableBodyProps, prepareRow, pageOptions,
        page, nextPage, previousPage, canNextPage, canPreviousPage,
        gotoPage, pageCount, state: { pageIndex },
        // @ts-ignore
    }: TableOptions | UsePaginationOptions<object> = useTable({ columns, data }, useSortBy, usePagination);

    // methods
    const gotoSelectedPage: ChangeEventHandler<HTMLSelectElement> = ({ currentTarget: t }) => gotoPage(t?.value || 1);

    return <Fragment>
        <forms.filter />
        <table {...getTableProps()} className="users">
            <thead>
                {headerGroups.map((headerGroup: UseTableHeaderGroupProps<any>) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column: HeaderGroup, index) => (
                                // @ts-ignore
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} className={`${column?.isSorted ? 'sort' : ''}`}>
                                    {column.render('Header')} {index < headerGroup.headers.length - 1 ? <img src={sort} alt="" className="sort" style={{
                                        transform: `rotate(${
                                            // @ts-ignore
                                            column.isSortedDesc ? 180 : 0
                                            }deg)`
                                    }} /> : null}
                                </th>
                            ))
                        }
                    </tr>))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {page.map(
                    // @ts-ignore
                    row => {
                        prepareRow(row);
                        // @ts-ignore
                        return <tr {...row.getRowProps()}>{row.cells.map((cell, index) => (
                            <td {...cell.getCellProps()}>{index < row.cells.length - 1 ? cell.render('Cell') : <cards.menu id={row.values.id} />}</td>))}
                        </tr>;
                    })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>
                        <span>showing
                            <select name="page" onSelect={gotoSelectedPage} onChange={gotoSelectedPage} defaultValue={pageIndex + 1}>
                                {Array(pageOptions.length).fill(0).map((_, index) => <option key={index} value={index + 1} >{index + 1}</option>)}
                                <option value=""></option>
                            </select>
                            out of {pageOptions.length}</span>
                    </td>
                    <td colSpan={2}>
                        <button disabled={!canPreviousPage} onClick={previousPage}>&lt;</button>
                        <button disabled={!canNextPage} onClick={nextPage}>&gt;</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </Fragment>;
};
