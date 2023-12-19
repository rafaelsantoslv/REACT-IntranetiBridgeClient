import { createContext, useEffect, useState } from "react";
import api from '../services/api'
import { Navigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(()=> {
        const loadingStoreData = async () => {

            const storageToken = localStorage.getItem("token")
            


            if(storageToken) {
                setUser(storageToken)
            }
        }

        
        loadingStoreData()
    }, [])
    
    const signOut = () => {
        localStorage.clear()
        setUser(null)
        return <Navigate to='/' />
    }

    const signIn = async ({email, senha}) => {
        try {
            const response = await api.post("/api/v1/auth",{ email, senha })

            if(response.data.error) {
            //    console.log(response)
               alert("Erro!")
            } else {
                console.log(response)
                setUser(response.data.token)
                localStorage.setItem("token", response.data.token)     

            }
            
        } catch (error) {
            console.log(error)
        }


    }

    return (
        <AuthContext.Provider value={{
            user,
            signed: !!user,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}