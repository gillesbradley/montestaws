import React, {useEffect, useState} from "react";
import Overlay from "./Components/Overlay";

import {getAuth, onAuthStateChanged } from 'firebase/auth'


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
  
    useEffect(() => {
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user)
        setPending(false)
      });
    }, []);
  
    if(pending){
      return <Overlay/>
    }
  
    return (
      <AuthContext.Provider
        value={{
          currentUser
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };