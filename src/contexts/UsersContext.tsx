import React, { createContext, useReducer } from 'react';
import { IGithubUser, IGithubUsers } from '../api/GithubAPI';

export const SET_USERS = 'SET_USERS';
export const SET_SELECTED_USER = 'SET_SELECTED_USER';

interface IUsers {
    dispatch: React.Dispatch<IUsersAction>;
    user: IGithubUser|null;
    users: IGithubUser[];
}

interface IUsersAction {
    payload?: any;
    type: string;
}

const defaultState: IUsers = {
    dispatch: () => {},
    user: null,
    users: [],
};

export const UsersContext = createContext(defaultState);

const reducer = (state: IUsers, { payload, type }: IUsersAction) => {
    switch (type) {
        case SET_USERS:
            return {
                ...state,
                users: (payload as IGithubUsers).items
            };
        case SET_SELECTED_USER:
            return {
                ...state,
                user: state.users.find((u: IGithubUser) => u.login === payload) ||  null
            };
        default:
            return state;
    }
};

export const UsersProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <UsersContext.Provider value={{ ...state, dispatch }}>
            { children }
        </UsersContext.Provider>
    )
};
