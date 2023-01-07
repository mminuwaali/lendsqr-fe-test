import './style.scss';
import { UserContext } from '../../contexts';
import { record as $record } from '../cards';
import type { reportType } from '../../vite-env';
import { Dispatch, ReactElement, SetStateAction, useEffect, useState, useContext } from 'react';

// icons
import all_users from '../../assets/icons/all-user.svg';
import loan_users from '../../assets/icons/loan-user.svg';
import active_users from '../../assets/icons/active-user.svg';
import saving_users from '../../assets/icons/saving-user.svg';

export default (): ReactElement => {
    // context
    const users = useContext(UserContext);

    // states
    const [usersObj, setUsersObj]: [reportType[], Dispatch<SetStateAction<reportType[]>>] = useState([
        { image: all_users, name: 'users', number: "0" },
        { image: active_users, name: 'active users', number: "0" },
        { image: loan_users, name: 'users with loans', number: "0" },
        { image: saving_users, name: 'users with savings', number: "0" },
    ]);

    useEffect(() => {
        let obj: reportType[] = JSON.parse(JSON.stringify(usersObj));
        obj[0].number = users.length.toString();
        obj[1].number = users.filter(usr => new Date(usr.lastActiveDate) < new Date()).length.toString();
        obj[2].number = users.filter(usr => Number(usr.education.loanRepayment) > 0).length.toString();
        obj[3].number = users.filter(usr => Number(usr.accountBalance) > 0).length.toString();

        setUsersObj(() => obj);
        console.log();

    }, [users]);

    return <div className="report">
        <h3>users</h3>
        <div className="data">
            {usersObj.map((args, index) => <$record key={index} {...args} />)}
        </div>
    </div>;
};
