import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const name = 'potato alu mia';

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser) {
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);
    //     }
    //     else {
    //         console.log("No user logged in");
    //         setUser(null);
    //     }
    // })


    const authInfo = {
        name,
        user,
        createUser,
        signInUser
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