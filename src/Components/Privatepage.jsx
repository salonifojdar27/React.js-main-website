import { Navigate } from "react-router-dom";

const Privatepage = ({ childern }) => {
    const isAuth = true;

    if (!isAuth) {
        return <Navigate to={"/Login"}></Navigate>
    }
    else {
        return childern
    }
}

export default Privatepage
