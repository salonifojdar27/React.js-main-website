import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Home from "./Home"
import Product from "./Product"
import Description from "./Description"



const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Product" element={<Product />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Description/:id" element={<Description />}></Route>
            <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>
    )
}

export default AllRoutes
