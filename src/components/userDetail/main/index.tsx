import './style.scss';
import {useParams} from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import back from '../../../assets/icons/back.svg';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';

export default (): ReactElement => {
    // params
    const {id} = useParams();

    // states
    const [open, setOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    // methods
    const toggleNav = () => setOpen(prev => !prev);

    return <div className="main-user">
        <Link to='/dashboard' className="back-btn">
            <img src={back} alt="" />
            <span>back to users</span>
        </Link>
        <div className="user-options">
            <h2>user details</h2>
            <div className="btn">
                <button className='blacklist'>blacklist user</button>
                <button className='activate'>activate user</button>
            </div>
        </div>
        <div className="main-detail">
            <div className="details">
                <div className="info">
                    <img src={''} alt="" />
                    <div className="">
                        <h3>grace isaac</h3>
                        <span>werdghjwddv</span>
                    </div>
                </div>
                <div className="tier">
                    <span>user's tier</span>
                    <div className="star"></div>
                </div>
                <div className="account-details">
                    <h3>N2,000,000</h3>
                    <span>0265654531/providus bank</span>
                </div>
            </div>
            <ul className={`tabs ${open ? 'open' : ''}`}>
                <li>
                    <NavLink to={`/dashboard/users/${id}`}>general details</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/documents`}>documents</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/bank`}>bank details</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/loans`}>loans</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/savings`}>savings</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/app`}>app and system</NavLink>
                </li>
            </ul>
            <div className={`open-btn ${open ? 'open' : ''}`} onClick={toggleNav}>
                <i></i><i></i><i></i>
            </div>
        </div>
    </div>;
};
