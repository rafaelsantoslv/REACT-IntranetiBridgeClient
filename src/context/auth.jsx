import { createContext, useEffect, useState } from "react";
import api from '../services/api'


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(()=> {
        const loadingStoreData = async () => {

            const storageToken = localStorage.getItem("token")
    
            if(storageToken) {
                console.log(storageToken)
            }
        }
        loadingStoreData()
    }, [])
    


    const signIn = async ({email, senha}) => {

        try {
            const response = await api.get("/api/v1/auth",{ email, senha })
    
            if(response.data.error) {
               console.log(response)
            } else {
                setUser(response.data)
                api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data.token}`;
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
        }}>
            {children}
        </AuthContext.Provider>
    )
}