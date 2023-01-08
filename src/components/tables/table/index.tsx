import './style.scss';
import React from 'react';
import Table from 'react-table';
import * as forms from '../../forms';
import * as cards from '../../cards';
import { stateType } from '../../../vite-env';
import { usersDataTable } from '../../../data';
import { UserContext } from '../../../contexts';

const Filter = (props: any) => {
    console.log(props);

    return <input type="text" name="" id="" />;
};

export default (): React.ReactElement<React.ReactFragment> => {
    // context
    const users = React.useContext(UserContext);

    // states
    const [filter, setFilter]: stateType<boolean> = React.useState(false);

    // memos
    const data = React.useMemo(() => users, []);
    const columns = React.useMemo(() => usersDataTable, []);
    const defaultColumn = React.useMemo(() => ({ Filter }), []);

    // table
    const tb: Table.TableInstance = Table.useTable({ data, columns, defaultColumn }, Table.useFilters, Table.useSortBy, Table.usePagination);

    // methods
    const toggleFilter = () => setFilter(prev => !prev);
    const gotoSelectedPage: React.ChangeEventHandler<HTMLSelectElement> = ({ currentTarget: t }) => tb.gotoPage(t?.value || 1);

    return <React.Fragment>
        {filter && <forms.filter close={toggleFilter} />}
    </React.Fragment>;
};