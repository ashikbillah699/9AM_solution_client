/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [showDashboard, setShowDashboard] = useState(false)

    // signup
    const createSignUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const createLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        setShowDashboard,
        showDashboard,
        createSignUp,
        createLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;