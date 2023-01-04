export const getItem = (key: string, alt?: any) => JSON.parse(localStorage.getItem(key) || alt);

export const setItem = (key: string, value: string) => localStorage.setItem(key, JSON.stringify(value));
