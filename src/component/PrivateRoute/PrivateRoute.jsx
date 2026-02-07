import React, { useContext } from 'react';
import { valueConText } from '../../RootLayout/RootLayout';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    console.log(children);
    const {user}=useContext(valueConText)
    if(!user || !user?.email){
        return <Navigate to="/signin"></Navigate>
    }
    return (
        <div>
            I am private route
            {children}
        </div>
    );
};

export default PrivateRoute;