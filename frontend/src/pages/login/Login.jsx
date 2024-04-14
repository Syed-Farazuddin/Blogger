/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../../services/index/Users";
import toast from "react-hot-toast";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => {
      return signIn({ email, password });
    },
    onSuccess: (data) => {
      console.log(data);
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const submitHandler = async (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };
  return (
    <Layout>
      <section className="container mx-auto px-5 py-10 ">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-darK-hard mb-8">
            Login
          </h1>
          <form action="" onSubmit={handleSubmit(submitHandler)}>
            {/* Email */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7183] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder="Enter email"
                className={`placeholder:text-[#959ead] text-darK-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border-[1px] border-[rgb(195,202,201)] ${
                  errors.email?.message ? "border border-red-500" : ""
                }`}
              />
              {errors?.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors?.email?.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7183] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password length must be atleast 6 character",
                  },
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
                placeholder="Enter password"
                className={`placeholder:text-[#959ead] text-darK-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border-[1px] border-[rgb(195,202,201)] ${
                  errors.password?.message ? "border border-red-500" : ""
                }`}
              />
              {errors?.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors?.password?.message}
                </p>
              )}
            </div>

            <Link
              to={"/forgot-password"}
              className="text-primary font-semibold text-sm"
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-primary text-white my-6 px-8 py-4 font-bold w-full rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={!isValid || isLoading}
            >
              Sign in
            </button>
            <p className="text-sm font-semibold text-[#5a7184]">
              Don't have an account ? {"  "}
              <Link to={"/register"} className="text-primary">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Login;
