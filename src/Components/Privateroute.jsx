import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext.jsx";

const Privateroute = ({ children }) => {
    const { token } = useContext(AuthContext)
    if (!token) {
        return <Navigate to={"/Login"}></Navigate>
    }
    else {
        return children;
    }
}

export default Privateroute
