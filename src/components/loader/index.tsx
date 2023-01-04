import './style.scss';
import { ReactElement } from 'react';

export default (): ReactElement<HTMLDivElement> => (
    <section id="loader">
        <div className="spinner">
            <span />
            <span />
        </div>
    </section>
);