import './style.scss';
import { Link } from 'react-router-dom';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';

// icons
import view from '../../../assets/icons/view-menu.svg';
import activate from '../../../assets/icons/activate-menu.svg';
import blacklist from '../../../assets/icons/blacklist-menu.svg';

export default ({id}:{id:number}): ReactElement<HTMLDivElement> => {
    // states
    const [open, setOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    // methods
    const toggleOpen = ():void => setOpen(prev => !prev);
    

    return <div className="menu">
        <button onClick={toggleOpen} className={open ? 'open' : ''}><i /><i /><i /></button>
        <ul className="links">
            <li>
                <img src={view} alt=""/>
                <Link to={`/dashboard/users/${id}`}>view details</Link>
            </li>
            <li>
                <img src={blacklist} alt=""/>
                <Link to='/'>blacklist user</Link>
            </li>
            <li>
                <img src={activate} alt=""/>
                <Link to='/'>activate user</Link>
            </li>
        </ul>
        <div className="links">
            <Link to='/'></Link>
            <Link to='/'></Link>
            <Link to='/'></Link>
        </div>
    </div>;
};