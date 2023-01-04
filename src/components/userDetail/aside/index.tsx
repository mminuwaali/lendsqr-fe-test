import './style.scss';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export default (): ReactElement => {
    return <div className="aside-user">
        <Outlet />
    </div>;
};
