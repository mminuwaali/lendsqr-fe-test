import { Fragment, ReactElement } from "react";
import * as forms from '../../components/forms';
import { useNavigate } from "react-router-dom";

export default (): ReactElement => {
    // navigation hook
    // const nav = useNavigate()

    return <Fragment>
        <forms.login />
    </Fragment>
};
