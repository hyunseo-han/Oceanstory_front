import React, { useState, useCallback } from "react";
import Styled from "styled-components";
import axios from "axios";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { AccountContainer } from "../common/AccountStyle";

const InputBox = Styled.input`
  position: relative;
  width: 228px;
  height: 40px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
`;

const PasswordBox = Styled(InputBox).attrs({
  type: "password",
})``;

const basicUrl =
  "https://509b-2001-e60-9269-c793-985-f194-41df-a594.jp.ngrok.io";

function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const login = useCallback(async () => {
    axios
      .post(
        `${basicUrl}/users/login/`,
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
        localStorage.setItem({ userToken: response.data.token });
        navigate("/write-letter");
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
          className="UserNameBox"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        ></InputBox>
        <div className="text">Password</div>
        <PasswordBox
          className="PasswordBox"
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
