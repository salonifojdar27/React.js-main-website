
import axios from "axios";
import { useState } from "react"

const Login = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handlelogin(e) {
    e.preventDefault();

    let userdata = { email, password }
    console.log(userdata)

    try {
      const resp = await axios.post("https://reqres.in/api/login", userdata, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        }
      })
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login">
      <form action="" onSubmit={handlelogin}>
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email" />
        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter your Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
