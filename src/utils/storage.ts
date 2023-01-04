export const setItem = (key: string, value: string) => localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key: string, alt?: any) => localStorage.getItem(key) ?JSON.parse(localStorage.getItem(key)!) : alt;
