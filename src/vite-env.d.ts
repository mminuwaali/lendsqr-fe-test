/// <reference types="vite/client" />

export type linksType<T = string> = {
    title: T,
    links: Array<{ path: T, name: T, icon: T }>
};

export type userType = {
    gender: T, bvn: T, address: T, currency: T,
    firstName: T, lastName: T, phoneNumber: T, avatar: T,
};

export type socialType<T = string> = {};

export type educationType<T = string> = {};

export type incomeType<T = string> = Array<string>;

export type dataType<T = string> = {
    email?: T,
    orgName?: T,
    userName?: T,
    createdAt?: T,
    updatedAt?: T,
    phoneNumber?: T,
    accountNumber?: T,
    lastActiveDate?: T,
    accountBalance?: T,
    profile?: userType,
    gurantor?: userType,
    socials?: socialType,
    monthlyIncome?: incomeType,
    education?: educationType,
};
