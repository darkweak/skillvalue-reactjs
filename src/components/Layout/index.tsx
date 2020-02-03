import React from 'react';
import { AppBar } from '../AppBar';

export const Layout: React.FC = ({ children }) => (
    <>
        <AppBar/>
        <main role="main" className="container">
            { children }
        </main>
    </>
);
