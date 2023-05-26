import React from 'react';
import { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user)

    const location = useLocation();
    console.log(location);
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }
    // return <Navigate state={{from: location}} to={"/login"}  replace></Navigate>
    return <Navigate to="/login" state={{ from: location }} replace />;
    // setUp priveat router......

};

export default PrivateRoute;