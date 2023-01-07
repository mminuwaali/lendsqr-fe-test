import { Column } from 'react-table';
import fees from './assets/icons/fees.svg';
import type { linksType } from './vite-env';
import cases from './assets/icons/case.svg';
import loans from './assets/icons/loans.svg';
import users from './assets/icons/users.svg';
import karma from './assets/icons/karma.svg';
import report from './assets/icons/report.svg';
import request from './assets/icons/request.svg';
import pricing from './assets/icons/pricing.svg';
import savings from './assets/icons/savings.svg';
import service from './assets/icons/service.svg';
import message from './assets/icons/message.svg';
import handshake from './assets/icons/handshake.svg';
import gurantors from './assets/icons/gurantors.svg';
import whitelist from './assets/icons/whitelist.svg';
import clipboard from './assets/icons/clipboard.svg';
import settlement from './assets/icons/settlement.svg';
import preference from './assets/icons/preference.svg';
import transaction from './assets/icons/transaction.svg';
import saveproduct from './assets/icons/saveproduct.svg';
import serviceaccount from './assets/icons/serviceaccount.svg';

export const tabLinks: linksType[] = [
    {
        title: 'customers', links: [
            { icon: users, name: 'users', path: '/dashboard/users' },
            { icon: gurantors, name: 'gurantors', path: '/dashboard/gurantors' },
            { icon: loans, name: 'loans', path: '/dashboard/loans' },
            { icon: handshake, name: 'decision models', path: '/dashboard/decision' },
            { icon: savings, name: 'savings', path: '/dashboard/savings' },
            { icon: request, name: 'loan reuests', path: '/dashboard/loan' },
            { icon: whitelist, name: 'whitelist', path: '/dashboard/whitelist' },
            { icon: karma, name: 'karma', path: '/dashboard/karma' },
        ]
    },
    {
        title: 'businesses', links: [
            { icon: cases, name: 'organisation', path: '/dashboard/organisation' },
            { icon: loans, name: 'loan products', path: '/dashboard/loan' },
            { icon: saveproduct, name: 'savings products', path: '/dashboard/karma' },
            { icon: fees, name: 'fees and charges', path: '/dashboard/karma' },
            { icon: transaction, name: 'transactions', path: '/dashboard/karma' },
            { icon: service, name: 'services', path: '/dashboard/karma' },
            { icon: serviceaccount, name: 'service account', path: '/dashboard/karma' },
            { icon: settlement, name: 'settlements', path: '/dashboard/karma' },
            { icon: report, name: 'reports', path: '/dashboard/karma' },
        ]
    },
    {
        title: 'settings', links: [
            { icon: preference, name: 'preferences', path: '/dashboard/preferences' },
            { icon: pricing, name: 'fees and pricing', path: '/dashboard/pricing' },
            { icon: clipboard, name: 'audit logs', path: '/dashboard/clipboard' },
            { icon: message, name: 'systems messages', path: '/dashboard/message' },
        ]
    },
];

export const usersDataTable: Column[] = [
    { Header: 'organisation', accessor: 'orgName' },
    { Header: 'username', accessor: 'userName' },
    { Header: 'email', accessor: 'email' },
    { Header: 'phone number', accessor: 'phoneNumber' },
    {
        Header: 'date joined', accessor: 'createdAt', Cell: ({ value }): string => {
            let d = new Date(value);
            let [utc, hrs, min, mm] = [d.toDateString(), d.getUTCHours(), d.getUTCDate(), d.getHours() > 12 ? 'PM' : 'AM'];
            return `${utc} ${hrs}:${min} ${mm}`;
        }
    },
    { Header: 'status', accessor: 'education.employmentStatus' },
    { Header: '', accessor: 'id' },
];