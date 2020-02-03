import React, { useContext } from 'react';
import { SET_SELECTED_USER, UsersContext } from '../../contexts';
import { IGithubUser } from '../../api/GithubAPI';

export const List: React.FC = () => {
    const { dispatch, users } = useContext(UsersContext);

    return (
        <ul>
            {
                users.map((user: IGithubUser, key: number) => (
                    <li {...{
                        key,
                        onClick: () => dispatch({
                            payload: user.login,
                            type: SET_SELECTED_USER,
                        })
                    }}>{ user.login }</li>
                ))
            }
        </ul>
    )
};
