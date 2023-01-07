import { FormEventHandler, ReactElement } from 'react';
import './style.scss';

export default (): ReactElement<HTMLFormElement> => {
    // states
    // methods
    const onSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
        e.preventDefault();
    };

    return <form action="#" className="filter-users" onSubmit={onSubmit}>
        <div className="form-group">
            <div className="input-group"><label htmlFor="organisation">organisation</label>
                <select name="organisation">
                    <option value="" hidden>select</option>
                </select>
            </div>
            <div className="input-group"><label htmlFor="username">username</label>
                <input type="text" name='username' placeholder='user' />
            </div>
            <div className="input-group"><label htmlFor="email">email</label>
                <input type="email" name='email' placeholder='email' />
            </div>
            <div className="input-group"><label htmlFor="date">date</label>
                <input type="date" name='date' placeholder='date' />
            </div>
            <div className="input-group"><label htmlFor="phone_number">phone number</label>
                <input type="tel" name='phone_number' placeholder='phone number' />
            </div>
            <div className="input-group"><label htmlFor="date">status</label>
                <select name="status">
                    <option value="" hidden>select</option>
                </select>
            </div>
        </div>
        <div className="btn">
            <button type='reset'>reset</button>
            <button type='submit'>filter</button>
        </div>
    </form>;
};
