import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const ApiContext = createContext(null);

const AppContext = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [wait, setWait] = useState(true);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signOutAll = () => {
        return signOut(auth);
    }

    const checkUserEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUserEmailPass = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const name = {
        auth,
        wait,
        setUser,
        user,
        googleLogin,
        signOutAll,
        checkUserEmailPassword,
        createUserEmailPass
    }

    useEffect(() => {
        const fetchUser = onAuthStateChanged(auth, (current) => {
            if (current) {
                setUser(current);
                setWait(false);
            } else {
                setUser(null);
                setWait(false);
            }
        });
        return () => {
            fetchUser()
        }
    }, [])

    return (
        <ApiContext.Provider value={name}>
            {
                children
            }
        </ApiContext.Provider>
    );
};

export default AppContext;