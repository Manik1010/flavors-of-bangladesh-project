import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth,GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();


const AuthProviders = ({ children }) => {

    // const user = { displayName: 'Allha Vorosa' };
    const [user, setUser] = useState(null);
    //reload korle login page cole ase....
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword( auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // const signInWithGoogle = () => {
    //     return signInWithPopup(auth, googleAuthProvider);
    // }
    const signInWithGoogle = () =>{
        return signInWithPopup( auth, googleAuthProvider)
    }
    const signInWithGithub = () =>{
        return signInWithPopup( auth, githubAuthProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (loginUser) => {
            console.log('inside User', loginUser);
            setUser(loginUser);
            setLoading(false);

            return () => {
                unsubscribe();
            }
          });
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;