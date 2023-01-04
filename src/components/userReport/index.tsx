import './style.scss';
import { ReactElement } from 'react';
import { record as $record } from '../cards';

export default (): ReactElement => {
    return <div className="report">
        <h3>users</h3>
        <div className="data">
            <$record image='' number={'2,000'} name='users' />
            <$record image='' number={'222,000'} name='active users' />
            <$record image='' number={'102,300'} name='users with loans' />
            <$record image='' number={'342,000'} name='users with savings' />
        </div>
    </div>;
};
