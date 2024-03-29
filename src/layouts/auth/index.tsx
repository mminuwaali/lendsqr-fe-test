import './style.scss';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/loader';
import logo from '../../assets/icons/logo.svg';
import auth from '../../assets/imgs/auth.svg';
import { ReactElement, Suspense } from 'react';

export default (): ReactElement => {
    return <Suspense fallback={<Loader />}>
        <section id="auth">
            <div className="left">
                <img src={logo} alt="" className="logo" />
                <div className="banner">
                    <img src={auth} alt="" className="auth" />
                </div>
            </div>
            <div className="right">
                <Outlet />
            </div>
        </section>
    </Suspense>
};
