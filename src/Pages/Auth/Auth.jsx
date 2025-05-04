import React, { useContext } from 'react';
import { ApiContext } from '../../AppContext/AppContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../../Layout/Components/Spinner/Spinner';

const Auth = ({ children }) => {

    const uriLoc = useLocation();

    const { user, wait } = useContext(ApiContext);

    if (user) {
        return (children);
    }
    else {
        if(wait){
            return <Spinner></Spinner>
        }
        else {
            return <Navigate state={uriLoc.pathname} to={'/login'}></Navigate>
        }
    }
};

export default Auth;