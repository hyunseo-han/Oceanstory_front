import { useCallback, useState } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AccountContainer,
  InputBox,
  PasswordBox,
} from "../common/AccountStyle";

function Join() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [secondPassword, setSecondPassword] = useState(null);
  const [eMail, setEMail] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const joinIn = useCallback(async () => {
    axios
      .post(
        `/users/register/`,
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
        navigate("/login");
      })
      .catch((response) => {
        setErrorMessage(response.response.data);
        alert("회원가입에 실패했습니다.");
      });
  }, [userName, password, secondPassword, eMail]);

  return (
    <AccountContainer>
      <div className="title">JOIN IN</div>
      <div className="input-wrap">
        <div className="text">Username</div>
        <InputBox
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        ></InputBox>
        {errorMessage?.username &&
          errorMessage.username.map((msg) => {
            return <div className="err-msg">{msg}</div>;
          })}
        <div className="text">Password</div>
        <PasswordBox
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></PasswordBox>
        {errorMessage?.password &&
          errorMessage.password.map((msg) => {
            return <div className="err-msg">{msg}</div>;
          })}
        <div className="text">Checking Password</div>
        <PasswordBox
          onChange={(e) => setSecondPassword(e.target.value)}
          value={secondPassword}
        ></PasswordBox>
        {errorMessage?.password2 &&
          errorMessage.password2.map((msg) => {
            return <div className="err-msg">{msg}</div>;
          })}
        <div className="text">E-mail</div>
        <InputBox
          onChange={(e) => setEMail(e.target.value)}
          value={eMail}
        ></InputBox>
        {errorMessage?.email &&
          errorMessage.email.map((msg) => {
            return <div className="err-msg">{msg}</div>;
          })}
      </div>

      <Button
        text={"JOIN IN"}
        width={"50%"}
        onClickEvent={() => {
          joinIn();
        }}
      ></Button>
    </AccountContainer>
  );
}

export default Join;
