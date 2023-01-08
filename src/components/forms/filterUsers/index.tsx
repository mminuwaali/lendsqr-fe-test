import './style.scss';
import { UserContext } from '../../../contexts';
import { dataType, stateType } from '../../../vite-env';
import { ChangeEventHandler, FormEventHandler, ReactElement, useContext, useEffect, useState } from 'react';

type propType<T = Function> = { close: T, updater: T, initial: Partial<dataType> };

export default ({ close, updater, initial }: propType): ReactElement<HTMLFormElement> => {
    // context
    const users = useContext(UserContext);

    // states
    const [org, setOrg]: stateType<string[]> = useState(['']);
    /** @ts-ignore */
    const [data, setData]: stateType<Partial<dataType>> = useState(initial);

    // effects
    useEffect(() => {
        console.log(initial);
        setOrg(() => [...new Set(users.map(attr => attr.orgName))]);
    }, [users]);

    // methods
    // @ts-ignore
    const reset = () => setData(prev => { for (let i in prev) prev[i] = ''; return prev; });
    const handleChange: ChangeEventHandler<any> = ({ currentTarget: t }) => setData(prev => ({ ...prev, [t.name]: t.value }));
    const onSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
        e.preventDefault();
        updater(() => data);
        close();
    };

    return <form action="#" className="filter-users" onSubmit={onSubmit}>
        <div className="form-group">
            <div className="input-group"><label htmlFor="organisation">organisation</label>
                <select name="orgName" onChange={handleChange} value={data?.orgName}>
                    <option value="" hidden>select</option>
                    {org.map(name => <option key={name} value={name}>{name}</option>)}

                </select>
            </div>
            <div className="input-group"><label htmlFor="username">username</label>
                <input type="text" name='userName' placeholder='user' onChange={handleChange} value={data?.userName} />
            </div>
            <div className="input-group"><label htmlFor="email">email</label>
                <input type="email" name='email' placeholder='email' onChange={handleChange} value={data?.email} />
            </div>
            <div className="input-group"><label htmlFor="date">date</label>
                <input type="date" name='createdAt' placeholder='date' onChange={handleChange} value={data?.createdAt} />
            </div>
            <div className="input-group"><label htmlFor="phone_number">phone number</label>
                <input type="tel" name='phoneNumber' placeholder='phone number' onChange={handleChange} value={data?.phoneNumber} />
            </div>
            <div className="input-group"><label htmlFor="date">status</label>
                <select name="status">
                    <option value="" hidden>select</option>
                </select>
            </div>
        </div>
        <div className="btn">
            <button type='reset' onClick={reset}>reset</button>
            <button type='submit'>filter</button>
        </div>
    </form>;
};
