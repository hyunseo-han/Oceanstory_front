import React from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
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

const Talk = styled.div`
  position: relative;
  width: 341px;
  height: 125px;
  top: 195px;
  background: #ffffff;
  border-radius: 53px;
  margin: auto;
`;

const TalkLetter = styled.div`
  position: relative;
  width: 311px;
  height: 87px;
  top: 30px;
  margin: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 133.19%;
  letter-spacing: 0.1em;
  color: #000000;
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
  height: 211px;
  top: 230px;
  margin: auto;
`;

/////////////////////////////////////////////////////////////////////////

function Main() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };

  //백엔드에서 이름 받아오기?
  return (
    <div className="Main">
      <Background>
        <Talk>
          <TalkLetter>
            편지는 잘 전달 했어!
            <br />
            XX이는/는 내일
            <br />
            편지를 열어 볼수 있을거야!
          </TalkLetter>
        </Talk>
        <Chracter>
          <img
            src={process.env.PUBLIC_URL + "/img/example.png"}
            alt="exampleIMG"
          />
        </Chracter>

        <JoinBtn>
          <JoinBtnLetter onClick={goToMain}>메인 화면으로 가기</JoinBtnLetter>
        </JoinBtn>
      </Background>
    </div>
  );
}

export default Main;
