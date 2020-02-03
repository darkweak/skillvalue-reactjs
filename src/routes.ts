import { RouteProps } from 'react-router';
import { Search, Welcome } from './pages';

export const navBarRoutes: RouteProps[] = [
    {
        component: Search,
        path: '/search',
    },
    {
        component: Welcome,
        path: '/',
        strict: true,
        exact: true,
    },
];

export const ssrRoutes: RouteProps[] = [
    {
        component: Search,
        path: '/search/:usersSearch',
    },
];

export const routes: RouteProps[] = [
    ...navBarRoutes
]
