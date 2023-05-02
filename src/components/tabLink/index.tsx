import './style.scss';
import { tabLinks } from '../../data';
import { ReactElement } from 'react';
import { NavLink, Link } from 'react-router-dom';

// icons
import $case from '../../assets/icons/case.svg';
import $home from '../../assets/icons/home.svg';
import logout from '../../assets/icons/logout.svg';
import $down from '../../assets/icons/caret-down.svg';

export default (): ReactElement => {
    return <aside>
        <NavLink to='/'>
            <img src={$case} alt="" />
            <span>switch organisation</span>
            <img src={$down} alt="" className='caret-down' />
        </NavLink>
        <NavLink to='/dashboard'>
            <img src={$home} alt="" />
            <span>dashboard</span>
        </NavLink>
        {tabLinks.map(({ links, title }) => (
            <div className="group" key={title}>
                <i>{title}</i>
                <div className="links">
                    {links.map(({ icon, name, path }) => (
                        <NavLink to={path} key={name}>
                            <img src={icon} alt="" />
                            <span>{name}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
        ))}
        <div className="group">
            <div className="links">
                <Link to='/'><img src={logout} alt="" /><span>logout</span></Link>
                <span className='version'>v1.2.0</span>
            </div>
        </div>
    </aside>;
};
