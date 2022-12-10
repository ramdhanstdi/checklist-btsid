import { Formik } from "formik";
import React from "react";
import Header from "../component/Header";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/asyncACtion/auth";

const FormLogin = ({ errors, handleSubmit, handleChange }) => {
  return (
    <form className="bg-gray-800 h-[1000px]" onSubmit={handleSubmit}>
      <p className="text-white">Email</p>
      <input type="text" name="email" />
      <p className="text-white">Password</p>
      <input type="password" name="password" />
      <br />
      <br />
      <div className="flex gap-3">
        <button className="bg-white" type="submit">
          Login
        </button>
        <button className="bg-white">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </form>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = (val) => {
    const request = {
      username: val.username,
      email: val.email,
      password: val.password,
    };
    dispatch(login(request));
  };
  return (
    <>
      <Header title="Login" />
      <Formik onSubmit={onSubmit} initialValues={{ email: "", password: "" }}>
        {(props) => <FormLogin {...props} />}
      </Formik>
    </>
  );
};

export default Login;
