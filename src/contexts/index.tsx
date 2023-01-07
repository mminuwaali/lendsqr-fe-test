import { dataType } from '../vite-env';
import { createContext } from 'react';

export const UserContext = createContext<dataType[]>([]);
