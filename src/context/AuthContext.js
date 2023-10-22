import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({ logado: true });

export function AuthProvider ({ children }) {

    const [logado, setLogado] = useState (false);

    function signIn(){
        return new Promise(resolve => {
            setTimeout(function(){
                setLogado(true);
            }, 2000)
        })
    }

    return (
        <AuthContext.Provider value = {{ logado, signIn }}> 
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;