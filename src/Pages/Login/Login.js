import React, { useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import Spinner from "./Spinner/Spinner";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  let from = location.state?.from?.pathname || "/";
  let errorMsg;
  if (error) {
    errorMsg = <p>{error.message}</p>;
  }
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
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Sent email");
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
                  type="email"
                  name="email"
                  ref={emailRef}
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
            <p className="text-danger">{errorMsg}</p>
            <button
              onClick={handleResetPassword}
              style={{ background: "transparent", border: "none" }}
              className="ps-4 text-left"
            >
              <small className="  text-warning py-0 fw-bold">
                Forget Password?
              </small>
            </button>
            <p className="newUser ms-2">
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
