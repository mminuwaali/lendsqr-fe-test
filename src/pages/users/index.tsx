import './style.scss';
import { Fragment, ReactElement } from "react";
import * as tables from '../../components/tables';
import UserReport from "../../components/userReport";

export default (): ReactElement => {
    return <Fragment>
        <UserReport />
        <section id="users-table">
            <tables.users />
        </section>
    </Fragment>;
};
