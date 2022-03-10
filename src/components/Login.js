import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/login.css";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email);
  // console.log(password);

  // **********************signIn function***************************
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  //********************register function */

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="Amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} type="submit" className="login__signIn">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Clone Conditions of Use and Sale.
          Please see our privacy notice , Our cookie Notice and our interest
          based Ads.
        </p>

        <button onClick={register} className="login__register">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
