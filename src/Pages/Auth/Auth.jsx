import React, { useContext } from 'react';
import { ApiContext } from '../../AppContext/AppContext';
import { Navigate, useLocation } from 'react-router';

const Auth = ({children}) => {

    const uriLoc = useLocation();

    const {user} = useContext(ApiContext);
    
    if(user){
        return (children);
    }
    else{
        return <Navigate state={uriLoc.pathname} to={'/login'}></Navigate>
    }
};

export default Auth;