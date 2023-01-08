import './style.scss';
import * as cards from '../../cards';
import * as forms from '../../forms';
import { usersDataTable } from '../../../data';
import { UserContext } from '../../../contexts';
import sort from '../../../assets/icons/sort.svg';
import { stateType, dataType } from '../../../vite-env';
import { useTable, useSortBy, usePagination, UsePaginationOptions, TableOptions, UseTableHeaderGroupProps, useFilters } from 'react-table';
import { ReactElement, useMemo, useContext, ChangeEventHandler, Fragment, useState, Dispatch, SetStateAction, MouseEventHandler, useEffect } from 'react';

const Filter = ({ column, name, value }: any) => {
    const { filterValue, setFilter } = column;
    useEffect(() => void setFilter(value), [value]);
    return <input type="hidden" name={name} value={filterValue || ''} readOnly />;
};

export default (): ReactElement<HTMLTableElement> => {
    // context
    const d = useContext(UserContext);

    // memo
    const data = useMemo(() => d || [], []);
    const columns = useMemo(() => usersDataTable, []);
    const defaultColumn = useMemo(() => ({ Filter }), []);

    // states
    const [filtered, setFiltered]: stateType<boolean> = useState(false);
    const [filterAll, setFilterAll]: stateType<boolean> = useState(false);
    /** @ts-ignore */
    const [filters, setFilters]: stateType<Partial<dataType>> = useState({ orgName: '', email: '', createdAt: '', phoneNumber: '', userName: '' });

    // effects
    useEffect(() => {
        setFiltered(() => Boolean(Object.values(filters).filter(n => n.toString().length).length));
    }, [filters]);

    //  react table hook
    const {
        headerGroups, gotoPage, state: { pageIndex },
        getTableProps, getTableBodyProps, prepareRow, pageOptions,
        page, nextPage, previousPage, canNextPage, canPreviousPage, // @ts-ignore
    }: TableOptions | UsePaginationOptions<object> = useTable({ columns, data, defaultColumn }, useFilters, useSortBy, usePagination);

    // methods
    const totggleFilter: MouseEventHandler<HTMLButtonElement> = () => void setFilterAll(prev => !prev);
    const gotoSelectedPage: ChangeEventHandler<HTMLSelectElement> = ({ currentTarget: t }) => gotoPage(t?.value || 1);

    return <Fragment>
        {filterAll && <forms.filter initial={filters} close={totggleFilter} updater={setFilters} />}
        <table {...getTableProps()} className="users">
            <thead>
                {headerGroups.map((headerGroup: UseTableHeaderGroupProps<{}>) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            /** @ts-ignore*/
                            headerGroup.headers.map((column, index) => <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {
                                    index < headerGroup.headers.length - 1 && /** @ts-ignore*/ <>
                                        {column.render('Header')}{column.canFilter ? column.render('Filter', { name: column.id, value: filters[column.id] }) : null} <img src={sort} alt="" className="sort" style={{ transform: `rotate(${column.isSortedDes ? 180 : 0}deg)` }} onClick={index == 0 ? totggleFilter : undefined} />
                                    </>
                                }
                            </th>)
                        }
                    </tr>))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    /** @ts-ignore */
                    page.map(row => {
                        prepareRow(row); return <tr {...row.getRowProps()}>
                            {/** @ts-ignore */}
                            {row.cells.map((cell, index) => <td {...cell.getCellProps()}> {index < row.cells.length - 1 ? (index ? cell.render('Cell') : null) : <cards.menu id={row.values.id} />} </td>)}
                        </tr>;
                    })
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={5}>
                        <span>
                            showing
                            <select name="page" onSelect={gotoSelectedPage} onChange={gotoSelectedPage} defaultValue={pageIndex + 1}>
                                {Array(pageOptions.length).fill(0).map((_, index) => <option key={index} value={index + 1} >{index + 1}</option>)}
                            </select>
                            out of {pageOptions.length}
                        </span>
                    </td>
                    <td colSpan={2} style={{ textAlign: 'right' }}>
                        <button disabled={!canPreviousPage} onClick={previousPage}>&lt;</button>
                        <button disabled={!canNextPage} onClick={nextPage}>&gt;</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </Fragment>;
};
