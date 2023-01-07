import { Fragment, ReactElement } from "react";
import Main from '../../components/userDetail/main';
import Aside from '../../components/userDetail/aside';

export default (): ReactElement => {
    return <Fragment>
        <Main />
        <Aside />
    </Fragment>;
}
