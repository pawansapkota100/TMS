import React from "react";
import { useState, useEffect } from "react";
import AuthServices from "../../services/AuthServices";
const Login = ({ handleLogin }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loggedin, setloggedin] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();

    // console.log("emial is", email);
    // console.log("pass is", password);

    // setemail("");
    // setpassword("");
    try {
      AuthServices(email, password);
      // Redirect or update state to show user is logged in
      console.log("Login successful");
    } catch (error) {
      throw new Error("Login failed");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" border-2 border-emerald-600 p-20 rounded-3xl">
        <form
          onSubmit={(e) => SubmitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            id="password"
            onChange={(e) => setpassword(e.target.value)}
            className="mt-3 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full mt-4 color-white outline-none bg-emerald-600 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full text-gray-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
