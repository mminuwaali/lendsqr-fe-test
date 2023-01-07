import './style.scss';
import { useParams } from 'react-router-dom';
import { dataType } from '../../../vite-env';
import { UserContext } from '../../../contexts';
import { Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState } from 'react';

export default (): ReactElement => {
    // params
    const { id } = useParams();

    // context
    const users = useContext(UserContext);

    // states
    const [user, setUser]: [Partial<dataType>, Dispatch<SetStateAction<Partial<dataType>>>] = useState({});

    // effects
    useEffect(() => {
        setUser(prev => users.find(usr => usr?.id == id) || prev);
        console.log(user);

    }, [id, users]);

    return <section id="general">
        <div className="group">
            <h3>personal information</h3>
            <div className="flex-items">
                <div className="flex-group">
                    <h4>full name</h4><span>{user?.profile?.firstName} {user?.profile?.lastName}</span>
                </div>
                <div className="flex-group">
                    <h4>phone number</h4><span>{user?.profile?.phoneNumber}</span>
                </div>
                <div className="flex-group">
                    <h4>email address</h4><span>{user?.email}</span>
                </div>
                <div className="flex-group">
                    <h4>bvn</h4><span>{user?.profile?.bvn}</span>
                </div>
                <div className="flex-group">
                    <h4>gender</h4><span>{user?.profile?.gender}</span>
                </div>
                <div className="flex-group">
                    <h4>marital status</h4><span>Single</span>
                </div>
                <div className="flex-group">
                    <h4>children</h4><span>None</span>
                </div>
                <div className="flex-group">
                    <h4>type of residence</h4><span>Parent's Appartment</span>
                </div>
            </div>
        </div>
        <div className="group">
            <h3>education <span>and</span> employment</h3>
            <div className="flex-items">
                <div className="flex-group">
                    <h4>level of education</h4><span>{user?.education?.level}</span>
                </div>
                <div className="flex-group">
                    <h4>employment status</h4><span>{user?.education?.employmentStatus}</span>
                </div>
                <div className="flex-group">
                    <h4>sector of employment</h4><span>{user?.education?.sector}</span>
                </div>
                <div className="flex-group">
                    <h4>duration of employment</h4><span>{user?.education?.duration}</span>
                </div>
                <div className="flex-group">
                    <h4>office email</h4><span>{user?.education?.officeEmail}</span>
                </div>
                <div className="flex-group">
                    <h4>monthly income</h4><span>₦{user?.education?.monthlyIncome[0] || 0} - ₦{user?.education?.monthlyIncome[1] || 0}</span>
                </div>
                <div className="flex-group">
                    <h4>loan repayment</h4><span>₦{user?.education?.loanRepayment || 0}</span>
                </div>
            </div>
        </div>
        <div className="group">
            <h3>socials</h3>
            <div className="flex-items">
                <div className="flex-group">
                    <h4>twitter</h4><span>{user?.socials?.facebook}</span>
                </div>
                <div className="flex-group">
                    <h4>facebook</h4><span>{user?.socials?.facebook}</span>
                </div>
                <div className="flex-group">
                    <h4>instagram</h4><span>{user?.socials?.instagram}</span>
                </div>
            </div>
        </div>
        <div className="group">
            <h3>gurantor</h3>
            <div className="flex-items">
                <div className="grid-group"><div className="flex-items">
                    <div className="flex-group">
                        <h4>full name</h4><span>{user?.guarantor?.firstName} {user?.guarantor?.lastName}</span>
                    </div>
                    <div className="flex-group">
                        <h4>phone number</h4><span>{user?.profile?.phoneNumber}</span>
                    </div>
                    <div className="flex-group">
                        <h4>email</h4><span>{user?.email}</span>
                    </div>
                    <div className="flex-group">
                        <h4>relationship</h4><span>Brother</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>;
};
