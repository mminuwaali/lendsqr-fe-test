import type {linksType} from './vite-env';
import { ColumnGroup } from 'react-table';
import cases from './assets/icon/case.svg';
import loans from './assets/icon/loans.svg';
import users from './assets/icon/users.svg';
import karma from './assets/icon/karma.svg';
import request from './assets/icon/request.svg';
import pricing from './assets/icon/pricing.svg';
import savings from './assets/icon/savings.svg';
import handshake from './assets/icon/handshake.svg';
import gurantors from './assets/icon/gurantors.svg';
import whitelist from './assets/icon/whitelist.svg';
import clipboard from './assets/icon/clipboard.svg';
import preference from './assets/icon/preference.svg';

export const tabLinks: linksType[] = [
    {
        title: 'customers', links: [
            { icon: users, name: 'users', path: '/dashboard?tab=users' },
            { icon: gurantors, name: 'gurantors', path: '/dashboard?tab=gurantors' },
            { icon: loans, name: 'loans', path: '/dashboard?tab=loans' },
            { icon: handshake, name: 'decision models', path: '/dashboard?tab=decision' },
            { icon: savings, name: 'savings', path: '/dashboard?tab=savings' },
            { icon: request, name: 'loan reuests', path: '/dashboard?tab=loan' },
            { icon: whitelist, name: 'whitelist', path: '/dashboard?tab=whitelist' },
            { icon: karma, name: 'karma', path: '/dashboard?tab=karma' },
        ]
    },
    {
        title: 'businesses', links: [
            { icon: cases, name: 'organisation', path: '/dashboard?tab=organisation' },
            { icon: loans, name: 'loan products', path: '/dashboard?tab=loan' },
            { icon: karma, name: 'savings products', path: '/dashboard?tab=karma' },
            { icon: karma, name: 'fees and charges', path: '/dashboard?tab=karma' },
            { icon: karma, name: 'transactions', path: '/dashboard?tab=karma' },
            { icon: karma, name: 'services', path: '/dashboard?tab=karma' },
            { icon: karma, name: 'service account', path: '/dashboard?tab=karma' },
            { icon: karma, name: 'settlements', path: '/dashboard?tab=karma' },
            { icon: karma, name: 'reports', path: '/dashboard?tab=karma' },
        ]
    },
    {
        title: 'settings', links: [
            { icon: preference, name: 'preferences', path: '/dashboard?tab=preferences' },
            { icon: pricing, name: 'fees and pricing', path: '/dashboard?tab=pricing' },
            { icon: clipboard, name: 'audit logs', path: '/dashboard?tab=clipboard' },
        ]
    },
];

export const usersDataTable: ColumnGroup[] = [
    

];