import './style.scss';
import { ReactElement } from 'react';
import searchIcon from '../../../assets/icon/search.svg';
import { AiOutlineSearch as Search } from 'react-icons/ai';

type propType = { search: boolean };

export default ({ search }: propType): ReactElement<HTMLFormElement> => {
    return <form action="#" method="post" className={`search ${search ? 'open' : ''}`}>
        <input type="search" name="search" placeholder='Search for anything' />
        <button type="submit">
            <img src={searchIcon} alt="" className="search" />
        </button>
    </form>;
};
