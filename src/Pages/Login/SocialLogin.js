import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();
  if (user || githubUser) {
    navigate("/");
  }
  if (loading || githubLoading) {
    <Spinner></Spinner>;
  }
  let errorMsg;
  if (error || githubError) {
    errorMsg = <p>{error?.message}</p>;
  }

  return (
    <div>
      <p className="text-danger text-left ms-2 fw-bold">{errorMsg}</p>
      <div className="social-login">
        <h3>log in via</h3>
        <div className="social-icons">
          <button
            style={{ border: "none", background: "transparent" }}
            onClick={() => {
              signInWithGoogle();
            }}
            className="social-login__icon  fs-3"
          >
            <FcGoogle />
          </button>
          <button
            style={{ border: "none", background: "transparent" }}
            disabled
            className="social-login__icon fab fa-facebook fs-3"
          >
            <FaFacebook />
          </button>
          <button
            style={{ border: "none", background: "transparent" }}
            onClick={() => {
              signInWithGithub();
            }}
            className="social-login__icon  fs-3"
          >
            <BsGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
