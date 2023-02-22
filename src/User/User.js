import React from "react";
// import ReactDOM from "react-dom";
import Styled from "styled-components";
import "./User.css";

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
  display:flex;
`;

// div로 지정하느냐 Div로 지정하느냐에 따라서 위치 달라짐
function User() {
  return (
    <Background className="Background">
      <div className={"selection-selection-wrapper"}>
        <div className={"selection-selection"}>
          <div className={"selection-view"}>
            <div className={"selection-overlap-group"}>
              <p className={"selection-n"}>오늘 받은 편지 갯수는 N개야!</p>
              <p className={"selection-MM-DD-HH-MM"}>
                편지 볼 수 있는 시간
                <br />
                MM : DD : HH : MM
              </p>
            </div>
            <div className={"selection-element"} />
            <div className={"selection-element-1"} />
          </div>
        </div>
      </div>
    </Background>
  );
}

export default User;
