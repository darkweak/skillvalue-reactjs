import React from 'react';
import { RouteProps, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { navBarRoutes } from '../../routes';

export const AppBar = () => {
    const { location } = useHistory();
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <span className="navbar-brand">ReactJS App</span>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    {
                        navBarRoutes.map((route: RouteProps, key: number) => (
                            <li {...{
                                className: `nav-item ${
                                    (route.strict ?
                                        location.pathname === route.path :
                                        location.pathname.includes(
                                            (route.path && !Array.isArray(route.path)
                                                && route.path.toString()
                                            ) || '')
                                    ) && 'active'
                                }`, key }}>
                                <Link
                                    className="nav-link"
                                    to={ (route.path && !Array.isArray(route.path) && route.path.toString()) || 'accueil' }>
                                    {
                                        (route.path && !Array.isArray(route.path) && route.path.split('/')[1].toString()) || 'accueil'
                                    }
                                    </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
};
