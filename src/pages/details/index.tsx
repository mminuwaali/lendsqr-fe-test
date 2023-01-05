import api from '../../utils/axios';
import { dataType } from '../../vite-env';
import { useParams } from 'react-router-dom';
import Main from '../../components/userDetail/main';
import Aside from '../../components/userDetail/aside';
import { getItem, setItem } from '../../utils/storage';
import { Dispatch, Fragment, ReactElement, SetStateAction, useEffect, useState } from "react";

export default (): ReactElement => {
    // params hook
    const { id } = useParams();

    // states
    const [user, setUser]: [Partial<dataType>, Dispatch<SetStateAction<Partial<dataType>>>] = useState({});

    // effects
    useEffect(() => { fetchUser() }, []);

    // methods
    const fetchUser: Function = async (): Promise<void> => {
        try {
            const res = await api.get(`users/${id}`);
            setItem('user', res.data || {});
            setUser(() => res.data || {});
            console.log(res.data);
            
        } catch (error: unknown) { console.error("Something went wrong while fetching user data"); }
    };

    return <Fragment>
        <Main />
        <Aside />
    </Fragment>;
}
