import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Login from "./login/Login";
import Join from "./login/Join";
import "./bubble.css";
import Button from "./common/Button";

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

const Chracter = styled.div`
  position: relative;
  width: 127px;
`;

/////////////////////////////////////////////////////////////////////////

function Main() {
  const navigate = useNavigate();

  const goPage = (link) => {
    navigate(link);
  };

  //onclick버튼으로 바꾸기
  return (
    <Background>
      <div
        style={{
          flex: "0 0 65%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <div class="bubble bubble--1"></div>
        <div class="bubble bubble--2"></div>
        <div class="bubble bubble--3"></div>
        <div class="bubble bubble--4"></div>
        <div class="bubble bubble--5"></div>
        <div class="bubble bubble--6"></div>
        <div class="bubble bubble--7"></div>
        <div class="bubble bubble--8"></div>
        <div class="bubble bubble--9"></div>
        <div class="bubble bubble--10"></div>
        <div class="bubble bubble--11"></div>
        <div class="bubble bubble--12"></div>
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
      </div>

      <div
        style={{
          flex: "0 0 35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          text={"로그인"}
          width={"70%"}
          onClickEvent={() => {
            goPage(`/login`);
          }}
        ></Button>
        <Button
          text={"회원가입"}
          width={"70%"}
          onClickEvent={() => {
            goPage(`/register`);
          }}
        ></Button>
        <Button
          text={"편지 쓰러 가기"}
          width={"70%"}
          onClickEvent={() => {
            goPage(`/write-letter`);
          }}
        ></Button>
      </div>
    </Background>
  );
}

export default Main;
