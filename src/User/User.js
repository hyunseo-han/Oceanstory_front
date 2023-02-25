import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Button from "../common/Button";
import { BasicContainer } from "../common/BasicStyle";

const Talk = styled.div`
  position: relative;
  width: 341px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border-radius: 53px;
`;

const TalkLetter = styled.div`
  position: relative;
  width: 311px;
  height: 87px;
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
`;

function User() {
  const navigate = useNavigate();

  //예람 작업내용
  const router = useLocation();
  const goToLetterByDate = useCallback(async () => {
    const userName = router.pathname.split("/")[2];
    navigate(`/letter-by-date/${userName}`);
  }, [router]);

  const [letterCount, setLetterCount] = useState(null);

  const getUserData = useCallback(async () => {
    const userName = router.pathname.split("/")[2];
    axios
      .get(`/letter/list/count/${userName}/`, {
        headers: {
          "Content-Type": `application/json`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        setLetterCount(response.data.letter_count);
      })
      .catch((response) => {
        alert("정보를 불러올 수 없습니다.");
      });
  }, [router]);

  useEffect(() => {
    if (router) {
      getUserData();
    }
  }, [router]);

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
  //요걸로 시간 설정해주기
  CountDownTimer("02/26/2023 00:00:00", "timeDeal");

  return (
    <BasicContainer>
      {letterCount && (
        <Talk>
          <TalkLetter>
            지금까지 받은 편지의 갯수는 {letterCount}개야!
            <br />
            편지는 <span id="timeDeal"></span>후에 볼 수 있어!
          </TalkLetter>
        </Talk>
      )}
      <Chracter>
        <img
          src={process.env.PUBLIC_URL + "/img/example.png"}
          alt="exampleIMG"
        />
      </Chracter>
      <Button
        text={"편지함 가기"}
        width={"70%"}
        onClickEvent={() => {
          goToLetterByDate();
        }}
      ></Button>
    </BasicContainer>
  );
}

export default User;
