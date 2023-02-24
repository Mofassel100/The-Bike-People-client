import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase.config/Firebase.config'
import { current } from 'daisyui/src/colors';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)
    const googleProvidr = new GoogleAuthProvider();
    const auth = getAuth(app)
    // google sign in
    const googleLogIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvidr);
    }
    // -----------
    // Register from create
    const NewRegisterUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // ----------------
    // Update Profile name and img
    const UpdateUsersProfils = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile);
    }
    // ---------------
    // login from
    const loginUsers = (email, password) => {

        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ---------------
    // log Out from
    const LogOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }
    // -----------
    // useEffect
    useEffect(() => {
        const unsubCriber = onAuthStateChanged(auth, current => {
            setLoader(false)
            setUser(current)
        })
        return () => unsubCriber()
    }, [current])
    // -----------
    const allInfoData = {
        loginUsers,
        NewRegisterUser,
        user,
        loader,
        LogOutUser,
        UpdateUsersProfils,
        googleLogIn,

    }
    return (
        <div>
            <AuthContext.Provider value={allInfoData}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

