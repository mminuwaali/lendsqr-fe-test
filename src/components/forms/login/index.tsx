import './style.scss';
import { Link } from 'react-router-dom';
import { ReactElement, useState, Dispatch, SetStateAction, ChangeEventHandler, FormEventHandler } from 'react';

type dataType = { email: string, password: string };

export default (): ReactElement<HTMLFormElement> => {
    // states
    const [show, seteShow]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [data, setData]: [dataType, Dispatch<SetStateAction<dataType>>] = useState({ email: "", password: "" });

    // methods
    const toggleShow = () => seteShow(prev => !prev);
    const updateData: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: t }) => setData(prev => ({ ...prev, [t.name]: t.value }))
    const onSubmit: FormEventHandler<HTMLFormElement> = (evennt) => {
        evennt.preventDefault();
        console.log(data);
    };

    return <form action="#" id='login' method="post" onSubmit={onSubmit}>
        <header>
            <h2>welcome!</h2>
            <span>Enter details to login</span>
        </header>
        <section className="form-group">
            <div className="group">
                <input placeholder='email' type="text" name="email" required onChange={updateData} />
            </div>
            <div className="group">
                <input placeholder='password' type={show ? 'text' : 'password'} name="password" required onChange={updateData} />
                <i children={show ? 'hide' : 'show'} onClick={toggleShow} />
            </div>
            <div className="group">
                <Link to='/'>forgot password?</Link>
            </div>
        </section>
        <footer>
            <button>log in</button>
        </footer>
    </form>;
};