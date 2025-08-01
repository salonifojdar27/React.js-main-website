
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [token] = useState(null);

    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    );
}
