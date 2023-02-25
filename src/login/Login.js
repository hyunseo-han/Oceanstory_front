import { useState, useCallback } from "react";
import axios from "axios";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import {
  AccountContainer,
  InputBox,
  PasswordBox,
} from "../common/AccountStyle";

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
          navigate(`/user/${response.data.username}`);
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
        text={"LOG IN"}
        width={"50%"}
        onClickEvent={() => {
          login();
        }}
      ></Button>
    </AccountContainer>
  );
}

export default Login;
