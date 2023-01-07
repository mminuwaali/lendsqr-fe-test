/// <reference types="vite/client" />

export { Column } from 'react-table';

export type linksType<T = string> = {
    title: T,
    links: Array<{ path: T, name: T, icon: T }>
};

export type tablesType = {
    data: dataType[]
};

export type reportType<T = string> = {
    image: T, name: T, number: T,
};

export type userType = {
    bvn: T,
    gender: T,
    avatar: T,
    address: T,
    currency: T,
    firstName: T,
    lastName: T,
    phoneNumber: T,

};

export type socialType<T = string> = {
    twitter: T,
    facebook: T,
    instagram: T,
};

export type educationType<T = string> = {
    level: T,
    sector: T,
    duration: T,
    officeEmail: T,
    loanRepayment: T,
    employmentStatus: T,
    monthlyIncome: Array<T>,
};

export type incomeType<T = string> = Array<string>;

export type dataType<T = string> = {
    id: T,
    email: T,
    orgName: T,
    userName: T,
    createdAt: T,
    phoneNumber: T,
    accountNumber: T,
    lastActiveDate: T,
    accountBalance: T,
    profile: userType,
    socials: socialType,
    education: educationType,
    monthlyIncome: incomeType,
    guarantor: Partial<userType>,
};
