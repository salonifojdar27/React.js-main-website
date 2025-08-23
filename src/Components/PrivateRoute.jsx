
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { Token } = useContext(AuthContext);

    if (!Token) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }

}

export default PrivateRoute;
