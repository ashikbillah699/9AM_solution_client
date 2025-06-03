/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showDashboard, setShowDashboard] = useState(false)

    // signup
    const createSignUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const createLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const createLogOut = () =>{
        return signOut(auth)
    }

    // update profile
    const userProfile = (displayName, photoURL)=>{
        return updateProfile(auth.currentUser, {displayName, photoURL})
    }

    const authInfo = {
        setShowDashboard,
        showDashboard,
        createSignUp,
        createLogin,
        createLogOut,
        user,
        userProfile
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return () =>{
            return unSubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;