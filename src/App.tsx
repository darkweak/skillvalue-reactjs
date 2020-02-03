import React from 'react';
import { Route, Switch, BrowserRouter, RouteProps } from 'react-router-dom';
import { routes } from './routes';

export const App: React.FC = () => (
    <BrowserRouter>
        <Switch>
            {
                routes.map((route: RouteProps, key: number) => <Route {...{ ...route, key }}/>)
            }
        </Switch>
    </BrowserRouter>
);
