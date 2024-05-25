import React, { useState } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/feature/alertSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(email, password);
    try {
      dispatch(showLoading());
      const { data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      dispatch(hideLoading());
      if (data && data.success) {
        localStorage.setItem("token", data.token);
        message.success("User Logged in Successfuly");
        navigate("/");
      } else {
        message.error(data.message);
      }
    } catch (error) {
      dispatch(hideLoading());

      console.log(error);

      message.error("Something goes wrong while login User");
    }
  };
  return (
    <>
      <div class="h-screen flex justify-center items-center">
        <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div class="w-full px-8 md:px-32 lg:px-24">
            <h1 className="text-3xl text-center"> LOGIN</h1>
            <Form
              layout="vertical"
              // onSubmit={handleSubmit}
              className="bg-white rounded-md shadow-2xl p-5"
            >
              <Form.Item label="Email" required>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Password" required>
                <Input.Password
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Form.Item>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="block w-full bg-blue-500 mt-5 py-2 rounded-2xl hover:bg-indigo-600 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                  LOGIN
                </button>
              </Form.Item>
              <div class="flex justify-between mt-4">
                <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Forgot Password
                </span>

                <Link
                  to={"/register"}
                  class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  Don't have an account yet
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
