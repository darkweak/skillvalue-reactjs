import React, { useContext, useEffect, useState } from 'react';
import { GithubAPI } from '../../api';
import { AxiosResponse } from 'axios';
import { SET_SELECTED_USER, SET_USERS, UsersContext } from '../../contexts';
import { useDebounce } from '../../hooks';

export const Search: React.FC = () => {
    const [ value, setValue ] = useState('');
    const { dispatch } = useContext(UsersContext);
    const debounced = useDebounce(value, 500);

    useEffect(() => {
        if (debounced) {
            new GithubAPI().getUsers(value).then(({data}: AxiosResponse) => {
                dispatch({
                    payload: data,
                    type: SET_USERS,
                });
                dispatch({
                    payload: '',
                    type: SET_SELECTED_USER,
                });
            });
        } else {
            if ('' !== debounced) {
                dispatch({
                    payload: {items: []},
                    type: SET_USERS,
                });
            }
        }
    }, [ debounced ]);

    return (
        <div className="form-group">
            <label htmlFor="usersSearch">Chercher un utilisateur</label>
            <input {...{
                className: 'form-control',
                id: 'usersSearch',
                onChange: (event: any) => setValue(event.target.value),
                placeholder: 'darkweak',
                value
            }}/>
        </div>
    );
};
