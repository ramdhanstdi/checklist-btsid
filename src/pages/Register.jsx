import React from "react";
import Header from "../component/Header";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../redux/asyncACtion/auth";

const regisSchema = Yup.object().shape({
  username: Yup.string().min(4),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Required"),
  password: Yup.string().required("Required"),
});

const FormRegister = ({ errors, handleSubmit, handleChange }) => {
  return (
    <form className="bg-gray-800 h-[1000px]" onSubmit={handleSubmit}>
      <p className="text-white">Username</p>
      <input type="text" name="username" onChange={handleChange} />
      <span className="text-white">{errors.username}</span>
      <p className="text-white">Email</p>
      <input type="text" name="email" onChange={handleChange} />
      <span className="text-white">{errors.email}</span>
      <p className="text-white">Password</p>
      <input type="password" name="password" onChange={handleChange} />
      <span className="text-white">{errors.password}</span>
      <br />
      <br />
      <div className="flex gap-3">
        <button className="bg-white" type="submit">
          Register
        </button>
        <button className="bg-white">
          <Link to="/">Login</Link>
        </button>
      </div>
    </form>
  );
};

const Register = () => {
  const dispatch = useDispatch();
  const onSubmit = (val) => {
    dispatch(register(val));
  };
  return (
    <>
      <Header title="Register" />
      <Formik
        validationSchema={regisSchema}
        onSubmit={onSubmit}
        initialValues={{ username: "", email: "", password: "" }}
      >
        {(props) => <FormRegister {...props} />}
      </Formik>
    </>
  );
};

export default Register;
