import React from "react";
import google from "../../../Assets/images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }
  if (user) {
    navigate("/");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "#3ABFF8" }}
          className="w-50"
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "1px", backgroundColor: "#3ABFF8" }}
          className="w-50"
        ></div>
      </div>
      {errorElement}
      <div className="text-center mt-3 mb-10">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary"
        >
          <img
            style={{ width: "35px", paddingRight: "5px", fontSize: "16px" }}
            src={google}
            alt=""
          />
          Google Sign in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
