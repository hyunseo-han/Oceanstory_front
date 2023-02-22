import React from "react";
// import { ReactDOM } from "react";
import Styled from "styled-components";

//height: 511.69px; 임시로 1000px 설정해놓은것
const Background = Styled.div`
  height: 100%;
`;

const SignIn = Styled.div`
  position: relative;
  height: 59px;
  top: 257px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 133.19%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.22em;
  color: #ffffff;
  backdrop-filter: blur(2px);
`;

const UserName = Styled.div`
  position: relative;
  width: 228px;
  height: 48px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 124.19%;
  display: flex;
  align-items: center;
  color: #7e7e7e;
  margin: auto;
`;

const UserNameBox = Styled.input`
  position: relative;
  width: 228px;
  height: 40px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
`;

const Password = Styled.div`
  position: relative;
  width: 228px;
  height: 48px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 124.19%;
  display: flex;
  align-items: center;
  color: #7e7e7e;
  margin: auto;
`;

const PasswordBox = Styled.input`
  position: relative;
  width: 228px;
  height: 40px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
`;

const Forget = Styled.div`
  position: relative;
  width: 228px;
  height: 48px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 124.19%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
  color: #7e7e7e;
`;

const SignInBtn = Styled.div`
  position: relative;
  width: 137px;
  height: 40px;
  background: linear-gradient(
      109.78deg,
      #3959ff 37.44%,
      rgba(255, 255, 255, 0) 196.54%
    ),
    linear-gradient(108.83deg, #000000 165.46%, rgba(255, 255, 255, 0) 210.88%);
  border-radius: 9px;
  margin: auto;
  cursor : pointer;
`;

//absolute로 바꾸면 왜 왼쪽으로 이동하는겨...?
const SignInBtnLetter = Styled.text`
  position: relative;
  width: 93px;
  height: 43px;
  margin: auto;
  font-family: "Saira";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 124.19%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
`;

//username, password쓰는 곳이랑 파란색 signin버튼 묶어놓음
const Div = Styled.div`
  position: relative;
  top: 330px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

//시간이 되면 비밀번호 확인칸도 만들면 좋을듯 (백엔드 없이 프론트로 해결 가능해서!)
function Join() {
  return (
    <div className="Join">
      <Background>
        <SignIn>SIGN IN</SignIn>
        <Div>
          <UserName>User name</UserName>
          <UserNameBox></UserNameBox>
          <Password>Password</Password>
          <PasswordBox></PasswordBox>
          <Forget>forget your password?</Forget>
          <SignInBtn>
            <SignInBtnLetter>Sign in</SignInBtnLetter>
          </SignInBtn>
        </Div>
      </Background>
    </div>
  );
}

export default Join;
