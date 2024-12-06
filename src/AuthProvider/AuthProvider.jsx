import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext()

const  AuthProvider = ({routes}) =>{

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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

    const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser , 
            updatedData)
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogOut, 
        manageProfile,
        updateUserProfile,
        user,
        setUser,
        loading
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