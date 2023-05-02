import './style.scss';
import * as form from '../forms';
import { Link } from 'react-router-dom';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';

// icons and images
import logo from '../../assets/icons/logo.svg';
import bell from '../../assets/icons/bell.svg';
import avatar from '../../assets/imgs/avatar.svg';
import down from '../../assets/icons/caret-down.svg';
import searchIcon from '../../assets/icons/search.svg';

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
                <img src={avatar} alt="" className='user-img' />
                <span>mminuwaali</span>
                <img src={down} alt="" className='caret-down' />
            </div>
        </div>
    </nav>;
};
