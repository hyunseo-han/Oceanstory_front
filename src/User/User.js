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
  //var open = new Date(2023, 01, 24, 00, 00, 00);
  //onclick버튼으로 바꾸기
  const goToLetterByDate = () => {
    navigate("/LetterByDate");
  };

  //일 지우면 이상해짐..
  function CountDownTimer(dt, id) {
    var end = new Date(dt);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    function showRemaining() {
      var now = new Date();
      var distance = end - now;

      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      document.getElementById(id).innerHTML = days + "일 ";
      document.getElementById(id).innerHTML += hours + "시간 ";
      document.getElementById(id).innerHTML += minutes + "분 ";
      document.getElementById(id).innerHTML += seconds + "초";
    }
    timer = setInterval(showRemaining, 1000);
  }
  CountDownTimer("02/25/2023 10:50:00", "timeDeal");

  return (
    <div className="Main">
      <Background>
        <Talk>
          <TalkLetter>
            오늘 받은 편지의 갯수는 N개야!
            <br />
            편지는 <span id="timeDeal"></span>후에 볼 수 있어!
          </TalkLetter>
        </Talk>
        <Chracter>
          <img
            src={process.env.PUBLIC_URL + "/img/example.png"}
            alt="exampleIMG"
          />
        </Chracter>

        <JoinBtn>
          <JoinBtnLetter onClick={goToLetterByDate}>편지함 가기</JoinBtnLetter>
        </JoinBtn>
      </Background>
    </div>
  );
}

export default Main;
