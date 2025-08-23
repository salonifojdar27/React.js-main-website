
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handlelogin(e) {
    e.preventDefault();

    let userdata = { email, password };
    console.log(userdata);
    try {
      const res = await axios.post("https://reqres.in/api/login", userdata, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        }
      });

      console.log(res.data);

      localStorage.setItem("userData", JSON.stringify(userdata)); // email & password
      localStorage.setItem("token", res.data.token); // API token
      setemail("");
      setpassword("");

      toast.success("Login Successful! Data saved in local storage.");
    }
    catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error || "Login Failed!");
    }
  }

  return (
    <div className="login">
      <form action="" onSubmit={handlelogin}>
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter your email" required autoComplete="email" />
        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter your Password" required autoComplete="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default Login;


