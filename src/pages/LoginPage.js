import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import vpnImage from "../vpnImage.svg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const usersWithAccess = [
    { email: "gaiusolawale", password: "password1" },
    { email: "emmanuel", password: "password2" },
    { email: "lura", password: "password3" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = usersWithAccess.find((user) => {
      return (
        user.email === email.slice(0, -10).toLowerCase() &&
        user.password === password
      );
    });
    if (users) {
      // setAuth(true);
      setErrorMessage("");
      localStorage.setItem("isAuthenticated", true);
      navigate("/layout");
    } else {
      // setAuth(false);
      setEmail("");
      setPassword("");
      localStorage.removeItem("isAuthenticated");
      setErrorMessage("Invalid email or password. You don't have access.");
    }
  };

  return (
    <div className="h-screen grid content-center gap-4 font-manrope">
      <img src={vpnImage} alt="vpn" className="mx-auto" />
      <h2 className="text-center text-2xl font-bold">LURA</h2>
      <form className="w-2/6 mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
          className="w-full h-[3em] border rounded-md shadow-sm pl-4 placeholder:text-sm  mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          className="w-full h-[3em] border rounded-md shadow-sm pl-4 placeholder:text-sm "
        />
        <button
          className="border px-4 py-2 bg-blue-600 text-white font-bold mt-2 rounded-md w-full"
          type="submit"
        >
          Login
        </button>

        {errorMessage ? (
          <div className="text-red-300 text-center">{errorMessage}</div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default LoginPage;
