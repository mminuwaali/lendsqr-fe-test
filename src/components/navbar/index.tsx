import './style.scss';
import * as form from '../forms';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import bell from '../../assets/icons/bell.svg';
import searchIcon from '../../assets/icons/search.svg';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';

export default (): ReactElement => {
    // states
    const [search, setSearch]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    // methods
    const toggleSearch = () => void setSearch(prev => !prev);

    return <nav>
        <img src={logo} alt="" className="logo" />
        <form.search search={search} />
        <button className='search' onClick={toggleSearch}>
            <img src={searchIcon} alt="" />
        </button>
        <div className="user-card">
            <Link to='/'>Docs</Link>
            <div className="user">
                <img src={bell} alt="" className="bell" />
                <img src="" alt="" className='user-img' />
                <span>Username</span>
            </div>
        </div>
    </nav>;
};
