import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext()

const  AuthProvider = ({routes}) =>{
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const handleRegister = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = () =>{
        signOut(auth)
        toast("Logout Successfully")
    }

    const manageProfile = (name, image) =>{
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    }

    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser , 
            updatedData)
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogOut, 
        manageProfile,
        updateUserProfile,
        user,
        setUser,
        loading,
        createUser,
        signInWithGoogle
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)

            return () =>{
                unsubscribe()
            }
        })

    }, [])

    return(
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    routes
                }
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider