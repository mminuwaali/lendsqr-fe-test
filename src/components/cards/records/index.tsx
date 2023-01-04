import './style.scss';
import { ReactElement } from 'react';

type propType = { image: string, number: number | string, name?: string };

export default ({ image = '', number = 0, name }: propType): ReactElement<HTMLDivElement> => {
    return <div className="cards">
        <img src={image} alt="" />
        <h4>{name}</h4>
        <span>{number}</span>
    </div>;
};
