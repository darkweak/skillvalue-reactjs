import React, { useContext } from 'react';
import { UsersContext } from '../../contexts';

export const Item: React.FC = () => {
    const { user } = useContext(UsersContext);

    if (!user) {
        return <div/>;
    }

    return (
        <img src={user.avatar_url} alt={user.avatar_url} />
    )
};
