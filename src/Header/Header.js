import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const provider = new GoogleAuthProvider();
    const {user, loginWithGoogle, logOut} = useContext(AuthContext);

    const handleGooglesignIn = () =>{
        console.log('clik');
        loginWithGoogle(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error('error', error)
        })
    }

    const handleLogOut = () => {
        logOut()
          .then()
          .catch()
      }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is Navber</h1>
            {user?.displayName}
            <button onClick={handleGooglesignIn}>LogInWithGoogle</button>
            <Link to='/register'><button>Register</button></Link>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/users'><button>All User</button></Link>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Header;