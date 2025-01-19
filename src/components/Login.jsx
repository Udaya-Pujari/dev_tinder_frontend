// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const [firstName, seFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "something went wrong");
      console.error(err?.response?.data || "something went wrong");
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "something went wrong");
      console.error(err?.response?.data || "something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-3">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Signup"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-1">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    placeholder="Enter Your First Name"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => seFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-1">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Enter Your Last name"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-1">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                placeholder="Enter Your Email Id"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailID(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-1">
              <div className="label">
                <span className="label-text">password</span>
              </div>
              <input
                type="password"
                value={password}
                placeholder="Enter Your Password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center m-1">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>
          <p
            className="mx-auto cursor-pointer py-1"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm ? "New user? Signup here" : "Existing user? Login her"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
