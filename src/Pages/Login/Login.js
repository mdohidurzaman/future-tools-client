import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import Loading from "../../Components/Shared/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    event.target.reset();
  };
  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="contianer w-50 mx-auto login-form">
      <h1 className="text-center text-5xl mb-5">Login to Future Tools!!</h1>
      <Form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          ref={passwordRef}
          required
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <button className="btn btn-primary px-4">Login</button>
      </Form>
      <p>
        New to future tools ?
        <span
          className="px-2 text-info"
          style={{ cursor: "pointer" }}
          onClick={navigateToRegister}
        >
          Please Register.
        </span>
        {errorElement}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
