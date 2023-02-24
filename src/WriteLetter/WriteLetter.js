import React from "react";
// import ReactDOM from "react-dom";
import Styled from "styled-components";
import axios from "axios";

//height: 511.69px; 임시로 1000px 설정해놓은것
const Background = Styled.div`
  height: 1000px;
  background: linear-gradient(
      187.08deg,
      #91c7ff 5.52%,
      rgba(255, 255, 255, 0) 106.67%
    ),
    #bfb0ff;
`;

//username, password쓰는 곳이랑 파란색 signin버튼 묶어놓음
const Div = Styled.div`
  position: relative;
  top: 330px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

//config 설정을 axios()에 요청할 수 있습니다.

function WriteLetter() {
  //편지 보내기 버튼에 onclick
  return (
    <Background
      className="Background"
      onClick={() => {
        axios({
          method: "POST",
          url: ``,
          data: {
            writer: "",
            letterContent: "",
          },
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => console.log(error));
      }}
    ></Background>
  );
}

export default WriteLetter;
