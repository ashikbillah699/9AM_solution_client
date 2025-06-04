/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useRef, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showDashboard, setShowDashboard] = useState(false)
    const [loading, setLoading] = useState(true)
    const rememberRef = useRef(false);

    // signup
    const createSignUp = (email, password,) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const createLogin = (email, password, rememberMe) => {
        rememberRef.current = rememberMe;
        console.log(rememberMe.current)
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const createLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update profile
    const userProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, { displayName, photoURL })
    }

    // subdomain
    const getSubdomain = () => {
        const host = window.location.hostname;
        const subdomain = host.split('.')[0];
        return subdomain;
    };

    const authInfo = {
        setShowDashboard,
        showDashboard,
        createSignUp,
        createLogin,
        createLogOut,
        user,
        userProfile,
        loading,
        getSubdomain
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser?.email) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                    user: { email: currentUser.email },
                    rememberMe: rememberRef.current
                }, { withCredentials: true })
                    .then(res => {
                        setLoading(false)
                        console.log(res.data)
                    })
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { withCredentials: true })
                    .then(res => {
                        setLoading(false)
                        console.log("logout", res.data)
                    })
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    useEffect(() => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/verify`, { withCredentials: true })
            .then(res => {
                setUser(res.data.user);
                setLoading(false);
            })
            .catch(() => {
                setUser(null);
                setLoading(false);
            });
    }, []);

    // if (loading) return <div>Loading...</div>;


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;