import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import "./Login.css";
import "./Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "./SocialLogin";
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);
  const [checked, setChecked] = useState(false);
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    console.log(user);
  }
  let errorMsg;
  if (error) {
    errorMsg = <p>{error.message}</p>;
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPass = event.target.confirmPass.value;
    if (password.length < 6) {
      return setError("Sorry Password Should contain at least 6 Characters");
    }

    if (password === confirmPass) {
      if (checked) {
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast("Creating Account");
        await sendEmailVerification();
        toast("Account Created ,Please Check your email");
        navigate(from, { replace: true });
      }
    } else {
      setError("Sorry! Password Didn't Match");
    }
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
                <input
                  type="checkbox"
                  onClick={() => setChecked(!checked)}
                  className=" text-left"
                  id="terms"
                />
                <label htmlFor="terms">
                  <small className={!checked ? "text-danger" : "text-success"}>
                    Accept the terms and Conditions of TourisMan
                  </small>
                </label>
              </div>
              <p className="text-danger">{errorMsg || Error}</p>
              <button className="button login__submit" disabled={!checked}>
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

export default SignUp;
