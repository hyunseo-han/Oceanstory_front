import React, { useCallback, useState } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AccountContainer,
  InputBox,
  PasswordBox,
} from "../common/AccountStyle";

const basicUrl =
  "https://509b-2001-e60-9269-c793-985-f194-41df-a594.jp.ngrok.io";

function Join() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [secondPassword, setSecondPassword] = useState(null);
  const [eMail, setEMail] = useState(null);

  const navigate = useNavigate();

  const joinIn = useCallback(async () => {
    axios
      .post(
        `${basicUrl}/users/register/`,
        {
          username: userName,
          password: password,
          password2: secondPassword,
          email: eMail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        navigate("login");
      })
      .catch((response) => {
        alert("회원가입에 실패했습니다.");
      });
  }, [userName, password]);

  return (
    <AccountContainer>
      <div className="title">JOIN IN</div>
      <div className="input-wrap">
        <div className="text">Username</div>
        <InputBox
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        ></InputBox>
        <div className="text">Password</div>
        <PasswordBox
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></PasswordBox>
        <div className="text">Checking Password</div>
        <PasswordBox
          onChange={(e) => setSecondPassword(e.target.value)}
          value={secondPassword}
        ></PasswordBox>
        <div className="text">E-mail</div>
        <InputBox
          onChange={(e) => setEMail(e.target.value)}
          value={eMail}
        ></InputBox>
      </div>

      <Button
        text={"JOIN in"}
        width={"30%"}
        onClickEvent={() => {
          joinIn();
        }}
      ></Button>
    </AccountContainer>
  );
}

export default Join;
