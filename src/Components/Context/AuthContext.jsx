
import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [token] = useState(true);

    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;