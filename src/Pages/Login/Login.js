import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Spinner from "./Spinner/Spinner";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="loginPage">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <h1
              className="ps-3 py-4"
              style={{ color: "#9b59b6", textAlign: "left" }}
            >
              Welcome Back
            </h1>
            <form onSubmit={handleSignIn} className="login">
              <div className="login__field">
                <FaUserAlt />
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  required
                  className="login__input"
                  placeholder="Type Your Email"
                />
              </div>
              <div className="login__field">
                <FaLock />
                <input
                  type="password"
                  className="login__input"
                  name="password"
                  required
                  placeholder="Password"
                />
              </div>
              <p></p>
              <button className="button login__submit">
                <span className="button__text ">Log In Now</span>
                <FaChevronRight />
              </button>
            </form>
            <p className="ps-4 text-left">
              <small className="  text-warning py-0 fw-bold">
                Forget Password?
              </small>
            </p>
            <p className="newUser">
              New at Tourisman? <br />
              <Link to="/signup" className="create">
                Create An Account
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
