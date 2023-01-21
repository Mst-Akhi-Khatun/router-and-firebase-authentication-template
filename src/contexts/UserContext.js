import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);


// const user = {displayName:'akhi'};


const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = (provider) => {
        setLoading(true)
       return signInWithPopup(auth, provider)
       
    }

    useEffect( () => {
      const unSubsCribe =  onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
            console.log('user inside state change', currentUser);
            setUser(currentUser)
            
        });
        return () =>{
            unSubsCribe();
        }
    }, [])

    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
       
    }

    const signIn = (email, password) =>{
        setLoading(false)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(false)
       return signOut(auth)
    }

    const authInfo = {user,loginWithGoogle, createUser, signIn, logOut, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;