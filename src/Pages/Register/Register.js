import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Register.css";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import Loading from "../../Components/Shared/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="register-form">
      <h2 className="m-5 text-center text-5xl">Register to future tools!</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          required
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <p className="text-center">
          <button className="btn btn-primary mt-3">Register</button>
        </p>
      </form>
      <p className="mt-3">
        Have an Account ?
        <span
          className="text-info"
          style={{ cursor: "pointer" }}
          onClick={navigateToLogin}
        >
          Please Login.
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
