import React from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "./login/Login";
import Join from "./login/Join";

//Background CSS 바꿀것
//height: 511.69px;
const Background = styled.div`
  height: 1000px;
  background: linear-gradient(
      187.08deg,
      #91c7ff 5.52%,
      rgba(255, 255, 255, 0) 106.67%
    ),
    #bfb0ff;
`;

const Title = styled.div`
  position: relative;
  height: 128.14px;
  top: 142px;
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
  height: 81.86px;
  top: 116px;
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
  top: 300px;
  margin: auto;
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
  top: 314.33px;
  margin: auto;
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

const WriteBtn = styled.div`
  position: relative;
  width: 299px;
  height: 46.51px;
  top: 329px;
  margin: auto;
  background: linear-gradient(
      109.78deg,
      #788eff 37.44%,
      rgba(255, 255, 255, 0) 196.54%
    ),
    linear-gradient(108.83deg, #000000 165.46%, rgba(255, 255, 255, 0) 210.88%);
  border-radius: 9px;
  cursor: pointer;
`;

const WriteLetter = styled.div`
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
  height: 211px;
  top: 144px;
  margin: auto;
`;

/////////////////////////////////////////////////////////////////////////

function Main() {
  const navigate = useNavigate();

  const goToLogin = () => {
    console.log("goToLogin");
    //return <Navigate to="Login" />;
    navigate("/Login");
  };

  const goToJoin = () => {
    console.log("goToJoin");
    //return <Navigate to="Join" />;
    navigate("/Join");
  };

  const goToWrtie = () => {
    navigate("/WriteLetter");
  };

  //onclick버튼으로 바꾸기
  return (
    <div className="Main">
      <Background>
        <Title>
          OCEAN
          <br /> STORY
        </Title>
        <SubTitle>
          멸종위기 바다 생물들과
          <br /> 우리의 이야기
        </SubTitle>
        <Chracter>
          <img
            src={process.env.PUBLIC_URL + "/img/example.png"}
            alt="exampleIMG"
          />
        </Chracter>
        <LoginBtn>
          <LoginBtnLetter onClick={goToLogin}>로그인</LoginBtnLetter>
        </LoginBtn>
        <JoinBtn>
          <JoinBtnLetter onClick={goToJoin}>회원가입</JoinBtnLetter>
        </JoinBtn>
        <WriteBtn>
          <WriteLetter onClick={goToWrtie}>편지 쓰기</WriteLetter>
        </WriteBtn>
      </Background>
    </div>
  );
}

export default Main;
