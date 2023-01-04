import './main.scss';
import Routes from './routes';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.querySelector('div#root') as HTMLDivElement).render(
    <StrictMode>
        <Routes />
    </StrictMode>
);
