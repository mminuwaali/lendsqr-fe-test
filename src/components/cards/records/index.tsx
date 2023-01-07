import './style.scss';
import { ReactElement } from 'react';
import type { reportType } from '../../../vite-env';

export default ({ image = '', number, name }: reportType): ReactElement<HTMLDivElement> => {
    return <div className="cards">
        <img src={image} alt="" />
        <h4>{name}</h4>
        <span>{number}</span>
    </div>;
};
