import './style.scss';
import api from '../../utils/axios';
import { dataType } from '../../vite-env';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts';
import Loader from '../../components/loader';
import Navbar from '../../components/navbar';
import TabLink from '../../components/tabLink';
import { getItem, setItem } from '../../utils/storage';
import { Dispatch, Fragment, ReactElement, SetStateAction, Suspense, useEffect, useState } from 'react';


export default (): ReactElement => {
    // states
    const [data, setData]: [dataType[], Dispatch<SetStateAction<dataType[]>>] = useState(getItem('users', []));

    // effects
    useEffect(() => { getUsers() }, []);

    // methods
    const getUsers = async (): Promise<void> => {
        try {
            const res = await api.get('/users');
            setItem('users', res.data || []);
            setData(() => res.data || []);
        } catch (error: unknown) { console.error("Something went wrong"); }
    };

    return <Fragment>
        <Navbar />
        <section id="dashboard">
            <TabLink />
            <main>
                <UserContext.Provider value={data}>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </UserContext.Provider>
            </main>
        </section>
    </Fragment>
};
