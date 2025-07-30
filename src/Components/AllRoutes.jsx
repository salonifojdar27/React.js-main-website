import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Edit from "./Edit"
import Home from "./Home"
import Product from "./Product"
import Addproduct from "./Addproduct"
import Description from "./Description"
import Privatepage from "./Privatepage"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Product" element={<Privatepage> <Product /> </Privatepage>}></Route>
            <Route path="/AddProduct" element={<Addproduct />}></Route>
            <Route path="/Edit" element={<Edit />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Description/:id" element={<Description />}></Route>
            <Route path="*" element={<h1>404 not found</h1>}></Route>
        </Routes>
    )
}

export default AllRoutes
