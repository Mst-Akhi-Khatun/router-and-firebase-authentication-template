import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    console.log(props.user);
    const {name} = props.user;
    return (
        <div>
            <h1>User Name: {name}</h1>
            {/* <Link to={}><button>see more</button></Link> */}
        </div>
    );
};

export default User;