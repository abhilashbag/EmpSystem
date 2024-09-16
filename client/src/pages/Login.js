import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const onSubmit = (data) => {
    setUser({ ...user, username: data.username, password: data.password });
    console.log(data);
    console.log(user);
    if (data.username === "Abhilash" && data.password === "Abhi123") {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="mt-4">
        <form action="" onSubmit={handleSubmit(onSubmit)} className=" ">
          <input
            {...register("username", { required: "Username is required" })}
            type="username"
            name="username"
            className="form-control mb-3"
            placeholder="Enter Your Username"
          />
          {errors.username && (
            <div className="text-danger mb-2">{errors.username.message}</div>
          )}
          <br />
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter your Password"
          />
          {errors.password && (
            <div className="text-danger mb-2">{errors.password.message}</div>
          )}
          <button type="submit" className="btn btn-primary text-right">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
