import api from "../../utils/axios";
import UserReport from "../../components/userReport";
import { getItem, setItem } from "../../utils/storage";
import { Fragment, ReactElement, useEffect, useState } from "react";

export default (): ReactElement => {
    // states
    const [data, setData] = useState(getItem('users', []));

    // effects
    useEffect(() => { fetchUsers() }, []);

    // methods
    const fetchUsers: Function = async (): Promise<void> => {
        try {
            const res = await api.get('/users');
            setItem('users', res.data || []);
            setData(() => res.data || []);
        } catch (error: unknown) { console.error("Something went wrong"); }
    };

    return <Fragment>
        <UserReport />
    </Fragment>;
};
