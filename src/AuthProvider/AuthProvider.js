import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail,
  FacebookAuthProvider,
} from 'firebase/auth';
import app from '../Firebase.config/Firebase.config';
import { current } from 'daisyui/src/colors';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  const googleProvidr = new GoogleAuthProvider();
  const facebookProbider = new FacebookAuthProvider();
  const auth = getAuth(app);
  // google sign in
  const googleLogIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvidr);
  };
  // -----------
  // Fascebook Sign in method
  const FacebookSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, facebookProbider)
      .then(result => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };
  // Register from create
  const NewRegisterUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ----------------
  // Update Profile name and img
  const UpdateUsersProfils = profile => {
    setLoader(true);
    return updateProfile(auth.currentUser, profile);
  };
  // ---------------
  // login from
  const loginUsers = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ---------------
  // log Out from
  const LogOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  // -----------

  // reset password

  const resetePassword = email => {
    return sendPasswordResetEmail(auth, email);
  };
  // -------------------------
  // useEffect
  useEffect(() => {
    const unsubCriber = onAuthStateChanged(auth, current => {
      setLoader(false);
      setUser(current);
    });
    return () => unsubCriber();
  }, [current]);
  // -----------
  const allInfoData = {
    loginUsers,
    NewRegisterUser,
    user,
    loader,
    LogOutUser,
    UpdateUsersProfils,
    googleLogIn,
    resetePassword,
    FacebookSignIn,
  };
  return (
    <div>
      <AuthContext.Provider value={allInfoData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
