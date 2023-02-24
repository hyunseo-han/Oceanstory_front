import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import Styled from "styled-components";

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

const DateBox = Styled.div`
  position: relative;
  width: 85%;
  height: 48px;
  top: 36px;
  background: #ffffff;
  border-radius: 39px;
  margin: auto;
`;

const DateBoxLetter = Styled.div`
  position: absolute;
  width: 327px;
  height: 41px;
  left: 43px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 133.19%;
  display: flex;
  align-items: center;
  letter-spacing: 0.22em;
  color: #000000;
`;

const ContentBox = Styled.div`
  position: relative;
  height: 120px;
  width: 120px; 
  left: 10px;
  background: #ffffff;
  border-radius: 39px;
  float: left; 
  
  margin-right: 10px;
`;

const ContentContainer = Styled.div`
  position: relative;
  height: 120px;
  top: 50px;
  overflow-x: auto;
`;
//스크롤 이상함
function LetterByDate() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setPosts();
    //괄호 안에 데이터 불러온거 넣기
  };

  return (
    <Background className="Background">
      <DateBox>
        <DateBoxLetter>YY:MM:DD</DateBoxLetter>
      </DateBox>
      <ContentContainer>
        {/* {posts.map((post) => (
          <ContentBox key={post.id}></ContentBox>
        ))} */}
        {/* 백이랑 연동할땐 주석 처리된 코드로 */}
        <ContentBox />
      </ContentContainer>
    </Background>
  );
}

export default LetterByDate;
