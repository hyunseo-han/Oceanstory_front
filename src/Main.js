import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Login from "./login/Login";
import Join from "./login/Join";

const Background = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 133.19%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.22em;
  color: #000000;
`;

const SubTitle = styled.div`
  position: relative;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 133.19%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.22em;
  color: #000000;
`;

const LoginBtn = styled.div`
  position: relative;
  width: 299px;
  height: 46.51px;
  background: linear-gradient(
      109.78deg,
      #788eff 37.44%,
      rgba(255, 255, 255, 0) 196.54%
    ),
    linear-gradient(108.83deg, #000000 165.46%, rgba(255, 255, 255, 0) 210.88%);
  border-radius: 9px;
  cursor: pointer;
`;

const JoinBtn = styled.div`
  position: relative;
  width: 299px;
  height: 46.51px;
  background: linear-gradient(
      109.78deg,
      #788eff 37.44%,
      rgba(255, 255, 255, 0) 196.54%
    ),
    linear-gradient(108.83deg, #000000 165.46%, rgba(255, 255, 255, 0) 210.88%);
  border-radius: 9px;
  cursor: pointer;
`;

const LoginBtnLetter = styled.div`
  width: 202.97px;
  height: 50px;
  left: 113.01px;
  top: 636px;
  font-family: "Saira";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 124.19%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
  color: #ffffff;
`;

const JoinBtnLetter = styled.div`
  width: 202.97px;
  height: 50px;
  left: 113.01px;
  top: 698px;
  font-family: "Saira";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 124.19%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: auto;
  color: #ffffff;
`;

const Chracter = styled.div`
  position: relative;
  width: 127px;
`;

/////////////////////////////////////////////////////////////////////////

function Main() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToJoin = () => {
    navigate("/join");
  };

  return (
    <Background>
      <div
        style={{
          flex: "0 0 70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <Title>
          OCEAN
          <br /> STORY
        </Title>
        <SubTitle>
          멸종위기 바다 생물들과
          <br /> 우리의 이야기
        </SubTitle>
        <Chracter>
          <img src={"/img/example.png"} alt="Image" />
        </Chracter>
      </div>

      <div
        style={{
          flex: "0 0 30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <LoginBtn>
          <LoginBtnLetter onClick={goToLogin}>로그인</LoginBtnLetter>
        </LoginBtn>
        <JoinBtn>
          <JoinBtnLetter onClick={goToJoin}>회원가입</JoinBtnLetter>
        </JoinBtn>
      </div>
    </Background>
  );
}

export default Main;
