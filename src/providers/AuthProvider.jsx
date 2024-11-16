import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const name = 'potato alu mia';

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        name,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


/**
 * 1. Create context with null as default value
 * 2. Create Provider
 * 3. Set a value with something (authInfo)
 * 4. [attention please !!!!!]
 * 5. use the auth provider in the main.jsx
 * 6. access the children inside the auth provider in the main.jsx 
 * 7. export authContext
 */