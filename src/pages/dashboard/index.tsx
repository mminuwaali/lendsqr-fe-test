import './style.scss';
import api from "../../utils/axios";
import { dataType } from "../../vite-env";
import * as tables from '../../components/tables';
import UserReport from "../../components/userReport";
import { getItem, setItem } from "../../utils/storage";
import { Dispatch, Fragment, ReactElement, SetStateAction, useEffect, useState } from "react";

export default (): ReactElement => {
    // states
    const [data, setData]: [dataType[], Dispatch<SetStateAction<dataType[]>>] = useState(getItem('users', []));

    // effects
    useEffect(() => { fetchUsers() }, []);

    // methods
    const fetchUsers: Function = async (): Promise<void> => {
        try {
            const res = await api.get('/users');
            setItem('users', res.data || []);
            setData(() => res.data || []);
            console.log(res.data);

        } catch (error: unknown) { console.error("Something went wrong"); }
    };

    return <Fragment>
        <UserReport />
        <section id="users-table">
            <tables.users data={data} />
        </section>
    </Fragment>;
};
