import * as layout from './layouts';
import { lazy, Suspense } from 'react';
import Loader from './components/loader';
import { BrowserRouter as Browser, Route, Routes } from 'react-router-dom';

const pages = {
    login: lazy(() => import('./pages/login')),
    users: lazy(() => import('./pages/users')),
    details: lazy(() => import('./pages/details')),
    dashboard: lazy(() => import('./pages/dashboard')),
};

const userTabs = {
    loan: lazy(() => import('./components/userTabs/loan')),
    bank: lazy(() => import('./components/userTabs/bank')),
    system: lazy(() => import('./components/userTabs/system')),
    saving: lazy(() => import('./components/userTabs/saving')),
    general: lazy(() => import('./components/userTabs/general')),
    document: lazy(() => import('./components/userTabs/document')),
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
                    <Route path="users" element={<pages.users />} />
                    <Route path='users/:id' element={<pages.details />}>
                        <Route index element={<userTabs.general />} />
                        <Route path="loan" element={<userTabs.loan />} />
                        <Route path="bank" element={<userTabs.bank />} />
                        <Route path="saving" element={<userTabs.saving />} />
                        <Route path="system" element={<userTabs.system />} />
                        <Route path="document" element={<userTabs.document />} />
                    </Route>
                </Route>
            </Routes>
        </Browser>
    </Suspense>;
};
