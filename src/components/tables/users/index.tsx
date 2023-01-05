import './style.scss';
import * as cards from '../../cards';
import { ReactElement, useMemo } from 'react';
import { tablesType } from '../../../vite-env';
import { usersDataTable } from '../../../data';
import sort from '../../../assets/icons/sort.svg';
import { useTable, useSortBy, HeaderGroup, usePagination } from 'react-table';

export default ({ data: d }: tablesType): ReactElement<HTMLTableElement> => {
    // memo
    const data = useMemo(() => d || [], []);
    const columns = useMemo(() => usersDataTable, []);
    //  react table hook
    const {
        headerGroups, rows,
        getTableProps, getTableBodyProps, prepareRow, pageOptions,
        page, nextPage, previousPage, canNextPage, canPreviousPage,
        state: { pageIndex }
    } = useTable({ columns, data }, useSortBy, usePagination);

    return <table {...getTableProps()} className="users">
        <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map((column: HeaderGroup, index) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} className={`${column?.isSorted ? 'sort' : ''}`}>
                                {column.render('Header')} {index < headerGroup.headers.length - 1 ? <img src={sort} alt="" className="sort" style={{ transform: `rotate(${column.isSortedDesc ? 180 : 0}deg)` }} /> : null}
                            </th>
                        ))
                    }
                </tr>))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {page.map(row => {
                prepareRow(row);
                return <tr {...row.getRowProps()}>{row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()}>{index < row.cells.length - 1 ? cell.render('Cell') : <cards.menu />}</td>))}
                </tr>;
            })}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={5}>
                    <span>page {pageIndex + 1} of {pageOptions.length}</span>
                </td>
                <td colSpan={2}>
                    <button disabled={!canPreviousPage} onClick={previousPage}>previous</button>
                    <button disabled={!canNextPage} onClick={nextPage}>next</button>
                </td>
            </tr>
        </tfoot>
    </table>
};
