import { createContext } from "react";

const AuthContext = createContext({ logado: true });

export function AuthProvider ({ children }) {
    return (
        <AuthContext.Provider value = {{ logado: false }}> 
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContext;