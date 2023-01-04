import './style.scss';
import api from '../../utils/axios';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/loader';
import Navbar from '../../components/navbar';
import TabLink from '../../components/tabLink';
import { Fragment, ReactElement, Suspense, useState } from 'react';


export default (): ReactElement => {
    // states
    const[data, setData] = useState([]);
    return <Fragment>
        <Navbar />
        <section id="dashboard">
            <TabLink />
            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </section>
    </Fragment>
};
