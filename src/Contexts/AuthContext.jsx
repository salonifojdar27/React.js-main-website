

import { useState, createContext } from "react";

export const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [Token] = useState(true);
    console.log("Im from AuthContext")

    return (
        <AuthContext.Provider value={{ Token }}>
            {children}
        </AuthContext.Provider>
    );
}
