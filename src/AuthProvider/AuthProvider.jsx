import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoading] = useState(true)


    const auth = getAuth(app)



    const googleProvider = new GoogleAuthProvider()


    /**GooGle Pop Up Login**/

    const googleLogin = () => {
        setLoading(true)
        console.log('Google login Function testing');
        return signInWithPopup(auth, googleProvider)
    }

    /**Create User With Email & PassWord**/
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signin With Email & PassWord
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /**LogOut User**/
    const logoutUser = () => {
        setLoading(true)
        signOut(auth)
    }


    /** Update PassWord**/
    const updatePassword = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    /**Create Observer For Observe User**/
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe
        }
    }, [auth])






    const userInfo = {
        user,
        loader,
        googleLogin,
        createUser,
        signInUser,
        logoutUser,
        updatePassword,
        setUser,
        
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;