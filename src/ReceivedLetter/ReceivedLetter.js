import React from "react";
// import ReactDOM from "react-dom";
import Styled from "styled-components";
import axios from "axios";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const Background = Styled.div`
  height: 1000px;
`;

//username, password쓰는 곳이랑 파란색 signin버튼 묶어놓음
const Div = Styled.div`
  position: relative;
  top: 330px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const FromBox = Styled.div`
  position: relative;
  width: 354px;
  height: 56.64px;
  top: 50px;
  margin: auto;
  background: #C7D0FD;
  border-radius: 53px;
`;

const FromText = Styled.input`
  position: relative;
  width: 80%;
  height: 37px;
  left: 20px;
  top: 7px;
  border: 0;
  border-bottom:1;
  outline: 0;
  background: #C7D0FD;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 133.19%;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  color: #000000;
`;

const LetterBox = Styled.div`
  position: relative;
  width: 354px;
  height: 554px;
  top: 82px;
  margin: auto;
  background: #C7D0FD;
  border-radius: 39px;
`;

const Text = Styled.textarea`
  background: transparent;
  width: 80%;
  height: 80%;
  resize: none;
  margin-left: 33px;
  margin-top: 20px;
  font-size: 1.5em;
  border: none;
  outline: 0;
`;

const Who = Styled.div`
  position: relative;
  width: 80%;
  height: 37px;
  left: 20px;
  top: 7px;
  margin-left: 15px;
  border: 0;
  border-bottom:1;
  outline: 0;
  background: #C7D0FD;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 133.19%;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  color: #000000;
`;

const Search = Styled.div`
  position: relative;
  left: 8.33%;
  right: 8.33%;
  top: 6.83%;
  bottom: 9.84%;
  float: right;
  margin-right: 13%;
  margin-top: -8%;
`;

const Writer = Styled.input`
  position: relative;
  border-left-width:0;
  border-right-width:0;
  border-top-width:0;
  border-bottom-width:1;  
  outline: 0;
  background: #C7D0FD;
`;

function WriteLetter() {
  const navigate = useNavigate();

  const goPage = (link) => {
    navigate(link);
  };

  return (
    <Background className="Background">
      <FromBox>
        <FromText placeholder="편지를 보낼 대상을 검색하세요"></FromText>
        <Search>
          <img
            src={process.env.PUBLIC_URL + "/img/search.png"}
            alt="searchImg"
          />
        </Search>
      </FromBox>
      <LetterBox>
        <Who>
          작성자: &nbsp;
          <Writer />
        </Who>
        <Text placeholder="내용을 입력하세요" />
      </LetterBox>
      <div
        style={{
          marginTop: "120px",
          flex: "0 0 35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          text={"편지함 가기"}
          width={"70%"}
          onClickEvent={() => {
            goPage(`/letter-by-date/:userName`);
          }}
        ></Button>
      </div>
    </Background>
  );
}

export default WriteLetter;
