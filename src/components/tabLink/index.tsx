import './style.scss';
import { tabLinks } from '../../data';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

// icons
import $case from '../../assets/icon/case.svg';
import $home from '../../assets/icon/home.svg';

export default (): ReactElement => {
    return <aside>
        <NavLink to='/dashboard?tab=1'>
            <img src={$case} alt="" />
            <span>switch organisation</span>
        </NavLink>
        <NavLink to='/dashboard?tab=1'>
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
    </aside>;
};
