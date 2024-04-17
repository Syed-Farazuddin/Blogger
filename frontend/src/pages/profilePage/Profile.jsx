import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Layout from "../../components/Layout";
import { getUserProfile } from "../../../services/index/Users";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProfilePicture from "../../components/ProfilePicture";
function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const {
    data: profileData,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });
  console.log(`data from profile page ${profileData}`);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: {
      name: profileIsLoading ? "" : profileData.name,
      email: profileIsLoading ? "" : profileData.email,
    },
    mode: "onChange",
  });
  const submitHandler = async (data) => {};
  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/login");
    }
  });
  return (
    <Layout>
      <section className="container mx-auto px-5 py-10 ">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={profileData?.avatar} />
          <form action="" onSubmit={handleSubmit(submitHandler)}>
            {/* Name */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7183] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be atleast 1 character",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                placeholder="Enter Name"
                className={`placeholder:text-[#959ead] text-darK-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border-[1px] border-[rgb(195,202,201)] ${
                  errors.name?.message ? "border border-red-500" : ""
                }`}
              />
              {errors?.name?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors?.name?.message}
                </p>
              )}
            </div>
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

            <button
              type="submit"
              className="bg-primary text-white my-6 px-8 py-4 font-bold w-full rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={!isValid || profileIsLoading}
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Profile;
