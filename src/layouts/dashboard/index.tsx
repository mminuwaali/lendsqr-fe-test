import './style.scss';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/loader';
import Navbar from '../../components/navbar';
import TabLink from '../../components/tabLink';
import { Fragment, ReactElement, Suspense, useEffect, useState } from 'react';


export default (): ReactElement => {
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
