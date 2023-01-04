import * as layout from './layouts';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom';

const pages = {
    login: lazy(() => import('./pages/login')),
    users: lazy(() => import('./pages/users')),
    details: lazy(() => import('./pages/details')),
    dashboard: lazy(() => import('./pages/dashboard')),
};

export default () => {
    return <Suspense>
        <Browser>
            <Routes>
                <Route path='/' element={<layout.auth}>
                    <Route path='' element={<pages.login />} />
                </Route>
                <Route path='/dashboard' element={<layout.dashboard}>
                    <Route path='user' element={<pages.dashboard />} />
                    <Route path='user/:id' element={<pages.details />} />
                </Route>
            </Routes>
        </Browser>
    </Suspense>;
};
