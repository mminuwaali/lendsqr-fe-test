import './style.scss';
import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

export default (): ReactElement<HTMLDivElement> => {
    // states
    const [open, setOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    // methods

    return <div className="menu">
        <button><i /><i /><i /></button>
        <ul className="links">
            <li>
                <Link to='/'>view details</Link>
                <Link to='/'>blacklist user</Link>
                <Link to='/'>activate user</Link>
            </li>
        </ul>
    </div>;
};