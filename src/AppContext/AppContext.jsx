import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

export const ApiContext = createContext(null);

const AppContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [wait, setWait] = useState(true);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const name = {
        wait,
        setUser,
        user,
        googleLogin
    }

    useEffect(()=>{
        const fetchUser = onAuthStateChanged(auth, (current)=>{
            if(current){
                setUser(current);
                setWait(false);
            }else{
                setUser(null);
                setWait(false);
            }    
        });
        return () =>{
            fetchUser()
        }
    },[])

    return (
        <ApiContext.Provider value={name}>
            {
                children
            }
        </ApiContext.Provider>
    );
};

export default AppContext;