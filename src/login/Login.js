import React, { useState, useCallback } from "react";
import axios from "axios";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import {
  AccountContainer,
  InputBox,
  PasswordBox,
} from "../common/AccountStyle";

const basicUrl =
  "https://30e4-2001-e60-925a-5b10-79-e833-7703-5107.jp.ngrok.io";

function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const login = useCallback(async () => {
    axios
      .post(
        `/users/login/`,
        {
          username: userName,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("userToken", response.data.token);
          navigate("/write-letter");
        }
      })
      .catch((response) => {
        alert("로그인에 실패했습니다.");
      });
  }, [userName, password]);

  return (
    <AccountContainer>
      <div className="title">LOG IN</div>
      <div className="input-wrap">
        <div className="text">User name</div>
        <InputBox
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        ></InputBox>
        <div className="text">Password</div>
        <PasswordBox
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></PasswordBox>
      </div>
      <Button
        text={"LOG in"}
        width={"30%"}
        onClickEvent={() => {
          login();
        }}
      ></Button>
    </AccountContainer>
  );
}

export default Login;
