import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import "./Login.css";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPass.value;
    console.log(name, email, password, confirmPass);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <h2
              className="ps-3 pt-3"
              style={{ color: "#9b59b6", textAlign: "left" }}
            >
              Create an Account
            </h2>
            <form onSubmit={handleCreateUser} className="login">
              <div className="login__field">
                <MdOutlineDriveFileRenameOutline />
                <input
                  autoComplete="off"
                  type="text"
                  className="login__input"
                  name="name"
                  placeholder="Type Your Name"
                />
              </div>
              <div className="login__field">
                <FaUserAlt />
                <input
                  autoComplete="off"
                  type="email"
                  className="login__input"
                  name="email"
                  placeholder="Type Your Email"
                />
              </div>
              <div className="login__field">
                <FaLock />
                <input
                  type="password"
                  className="login__input"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="login__field">
                <FaLock />
                <input
                  type="password"
                  className="login__input"
                  name="confirmPass"
                  placeholder=" Confirm Password"
                />
              </div>
              <div className=" checkbox">
                <input type="checkbox" className=" text-left" id="terms" />
                <label htmlFor="terms">
                  <small className=" ms-1 fw-bold">
                    Accept the terms and Conditions of TourisMan
                  </small>
                </label>
              </div>
              <p></p>
              <button className="button login__submit">
                <span className="button__text ">Log In Now</span>
                <FaChevronRight />
              </button>
            </form>
            <p className="ps-4 text-left">
              <Link
                to="/login"
                style={{ color: "#c23616" }}
                className=" py-0 fw-bold"
              >
                Already Have an Account?
              </Link>
            </p>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="/" className="social-login__icon  fs-3">
                  <FcGoogle />
                </a>
                <a href="/" className="social-login__icon fab fa-facebook fs-3">
                  <FaFacebook />
                </a>
                <a href="/" className="social-login__icon  fs-3">
                  <BsGithub />
                </a>
              </div>
            </div>
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

export default SignUp;
