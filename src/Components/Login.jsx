import axios from "axios";
import { useState } from "react"

const Login = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let userdata = {email,password}
    axios.post(``)
  }
  return (
    <div className="login">
      <form action="" onSubmit={handleLogin}>
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" />
        <input type="password"value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder="Enter your Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
