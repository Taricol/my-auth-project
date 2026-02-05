import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


export const valueConText=createContext()

const RootLayout = () => {
    const [user,setUser]=useState(null)
    
    const handleLogin=(email,password)=>{
        
              return signInWithEmailAndPassword(auth, email, password);
  
    };

    const handleSignUp=(auth,email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password);
}
    const contextValues={
        handleLogin,
        handleSignUp,
        setUser,
        user
    }
    return (
        <div>
            
            <valueConText.Provider value={contextValues}>
                <Navbar></Navbar>
                <Outlet/>
            </valueConText.Provider>
        </div>
    );
};

export default RootLayout;