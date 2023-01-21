import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>This is all user</h1>
            {users.length}
            {
                users.map(u => <User user={u} key={u.id}></User>)
            }
        </div>
    );
};

export default Users;