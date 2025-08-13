import { NavLink } from "react-router-dom"

const linkdata = [{
    id: 1,
    path: "/",
    text: "Home"
},
{
    id: 2,
    path: "/Product",
    text: "Product"
},
{
    id: 5,
    path: "/Login",
    text: "Login"
},


]

const Navbar = () => {
    return (
        <div className="Navbar">
            {linkdata.map((el) => (
                <div key={el.id}>
                    <NavLink style={({ isActive }) => (isActive ? { color: "white", backgroundColor: " rgba(37, 134, 232, 1)", borderRadius: "8px", padding: "10px 20px", } : { color: "black" })} to={el.path}>{el.text}</NavLink>
                </div>
            ))}
            {/* <NavLink to={"/Home"}>Home</NavLink>
            <NavLink to={"/Product"}>Product</NavLink>
            <NavLink to={"/Addproduct"}>Addproduct</NavLink>
            <NavLink to={"/Edit"}>Edit</NavLink>
            <NavLink to={"/Login"}>Login</NavLink> */}
        </div>
    )
}

export default Navbar
