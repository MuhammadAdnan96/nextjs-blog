import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "../inputContainer";
import axiosCall from "../lib/axiosCall";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux-toolkit/features/tokenSlice";
import Cookies from "universal-cookie";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.tokenReducer.userToken);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LoginHandler = async () => {
    const tokenData = await axiosCall(userName, password, setError);
    dispatch(login(tokenData));
    const cookies = new Cookies();
    cookies.set("userToken", tokenData);
    // console.log("token", token);
    // if (token) {
    router.push("/products");
    // }
  };
  return (
    <div className="body">
      <Container
        userName={userName}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
        LoginHandler={LoginHandler}
      />
    </div>
  );
};
export default Login;
