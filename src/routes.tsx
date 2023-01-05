import * as layout from './layouts';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom';
import Loader from './components/loader';

const pages = {
    login: lazy(() => import('./pages/login')),
    users: lazy(() => import('./pages/users')),
    details: lazy(() => import('./pages/details')),
    dashboard: lazy(() => import('./pages/dashboard')),
};

const userTabs = {
    general: lazy(() => import('./components/userTabs/general')),
};

export default () => {
    return <Suspense fallback={<Loader />}>
        <Browser>
            <Routes>
                <Route path='/' element={<layout.auth />}>
                    <Route index element={<pages.login />} />
                </Route>
                <Route path='/dashboard' element={<layout.dashboard />}>
                    <Route index element={<pages.dashboard />} />
                    <Route path='users/:id' element={<pages.details />}>
                        <Route index element={<userTabs.general />} />
                    </Route>
                </Route>
            </Routes>
        </Browser>
    </Suspense>;
};
