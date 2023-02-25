import React from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../common/Button";
//Background CSS 바꿀것
//height: 511.69px;
const Background = styled.div`
  height: 1000px;
`;

const Talk = styled.div`
  position: relative;
  width: 341px;
  height: 125px;
  top: 195px;
  background: white;
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
  text-align: center;
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

  const goPage = (link) => {
    navigate(link);
  };

  return (
    <div className="Main">
      <Background>
        <Talk>
          <TalkLetter>
            편지는 잘 전달 했어!
            <br />
            민우(이)는 내일
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
        <div
          style={{
            marginTop: "320px",
            flex: "0 0 35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Button
            text={"메인 화면으로 돌아가기"}
            width={"70%"}
            onClickEvent={() => {
              goPage(`/`);
            }}
          ></Button>
        </div>
      </Background>
    </div>
  );
}

export default Main;
