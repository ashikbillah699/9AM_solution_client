/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [showDashboard, setShowDashboard] = useState(false)
    console.log(showDashboard)

    const authInfo = {
        setShowDashboard,
        showDashboard,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;