import './style.scss';
import { useParams } from 'react-router-dom';
import {UserContext} from '../../../contexts';
import { Link, NavLink } from 'react-router-dom';
import type { dataType } from '../../../vite-env';
import { Dispatch, ReactElement, SetStateAction, useState, useContext, useEffect } from 'react';

// icons
import back from '../../../assets/icons/back.svg';
import star from '../../../assets/icons/star.svg';
import colored from '../../../assets/icons/colored-star.svg';

export default (): ReactElement => {
    // params
    const { id } = useParams();

    // context
    const users = useContext(UserContext);

    // states
    const [open, setOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [user, setUser]:[Partial<dataType>, Dispatch<SetStateAction<Partial<dataType>>>] = useState({});

    // effects
    useEffect(() => {
        setUser(prev => users.find(usr => usr?.id == id) || prev);
    },[id, users]);

    // methods
    const toggleNav = () => setOpen(prev => !prev);
    

    return <div className="main-user">
        <Link to='/dashboard/users' className="back-btn">
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
                    <img src={user?.profile?.avatar} alt="" />
                    <div className="">
                        <h3>{user?.userName}</h3>
                        <span>werdghjwddv</span>
                    </div>
                </div>
                <div className="tier">
                    <span>user's tier</span>
                    <div className="star">
                        <img src={colored} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                </div>
                <div className="account-details">
                    <h3>₦{user?.accountBalance}</h3>
                    <span>{user?.accountNumber}</span>
                </div>
            </div>
            <ul className={`tabs ${open ? 'open' : ''}`}>
                <li>
                    <NavLink to={`/dashboard/users/${id}`}>general details</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/document`}>documents</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/bank`}>bank details</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/loan`}>loans</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/saving`}>savings</NavLink>
                </li>
                <li>
                    <NavLink to={`/dashboard/users/${id}/system`}>app and system</NavLink>
                </li>
            </ul>
            <div className={`open-btn ${open ? 'open' : ''}`} onClick={toggleNav}>
                <i></i><i></i><i></i>
            </div>
        </div>
    </div>;
};
