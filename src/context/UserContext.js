import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, updateProfile,sendPasswordResetEmail} from "firebase/auth"
import app from "../firebase/firebase.config"
export const AuthContext=createContext("");

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
 





const UserContext = ({children}) => {
    const [user,setUser]=useState("");
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    const logInWithEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const profileUpdate=(user,name,photo)=>{
        return updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
    }
    const forgetPassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }


    
    
    
    
     useEffect(()=>{
        const unSubscibe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
       })

     return ()=>unSubscibe()  
     },[])
    
    const authInfo={
        createUser,
        user,
        loading,
        logInWithEmail,
        logOut,
        logInWithGoogle,
        profileUpdate,
        forgetPassword
      }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;