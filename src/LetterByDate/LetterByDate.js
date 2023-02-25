import { useState, useEffect, useCallback } from "react";
import Styled from "styled-components";
import { BasicContainer } from "../common/BasicStyle";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const DateBox = Styled.div`
&{
  width: 100%;
  height: 48px;
  background: #ffffff;
  border-radius: 39px;

  > div {
    width: 327px;
    height: 41px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 133.19%;
    display: flex;
    align-items: center;
    letter-spacing: 0.22em;
    color: #000000;
  }
}
`;

const ContentContainer = Styled.div`
&{
  position: relative;
  height: 120px;
  
  display: flex;
  flex:${(props) => `0 0 ${props.width}`};
  padding: 0.5rem;

  background: #ffffff;
  border-radius: 15px;
  cursor: pointer;

  > div {
    display: flex;
    justify-content: center;
    align-items:center;

    width: 100%;
    height:100%;
    position: relative;
    float: left; 
    overflow: auto;
  }
}
`;

function LetterByDate() {
  const navigate = useNavigate();
  const router = useLocation();
  const [letterList, setLetterList] = useState({
    "2023-02-24T02:09:44.775504": [
      {
        id: 13,
        sender: "name",
        title: "안녕@",
        content: "name",
        receiver_username: "choimj",
      },
      {
        id: 14,
        sender: "name",
        title: "벚꽃톤 재미있니?",
        content: "name",
        receiver_username: "choimj",
      },
      {
        id: 15,
        sender: "name",
        title:
          "매우 긴 제목을 적어보지. 이럴 때는 어떻게 해야할까. 프론트는 고통스럽다. 알려줘, 어떻게 할지. 헤이헤잉",
        content: "name",
        receiver_username: "choimj",
      },
      {
        id: 16,
        sender: "name",
        title: "name",
        content: "name",
        receiver_username: "choimj",
      },
    ],
    "2023-02-25T02:09:44.775504": [],
  });

  const goPage = useCallback(
    async (link) => {
      navigate(link);
    },
    [router]
  );

  const getLetterData = useCallback(async () => {
    const userName = router.pathname.split("/")[2];
    axios
      .get(`/letter/list/${userName}/`)
      .then((response) => {
        setLetterList(response.data);
      })
      .catch((response) => {
        alert("편지 정보를 불러올 수 없습니다.");
      });
  }, [router]);

  useEffect(() => {
    if (router) {
      // getLetterData();
    }
  }, [router]);

  const getTimeText = (timeZone) => {
    const date = timeZone.split("T")[0]; //.split("-");

    return date;
  };

  const renderLetterList = (letterList) => {
    if (letterList) {
      const result = [];
      for (const [timeZone, letters] of Object.entries(letterList)) {
        result.push(
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <DateBox>
              <div>{getTimeText(timeZone)}</div>
            </DateBox>
            {letters.length > 1 ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  overflowX: "auto",
                  gap: "0.5rem",
                  boxSizing: "border-box",
                }}
              >
                {letters.map((letter) => {
                  return (
                    <ContentContainer width={"30%"}>
                      <div>{letter.title}</div>
                    </ContentContainer>
                  );
                })}
              </div>
            ) : (
              <ContentContainer width={"100%"}>
                <div>편지가 없습니다.</div>
              </ContentContainer>
            )}
          </div>
        );
      }
      return result;
    }
  };

  return (
    <BasicContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          flex: "1 1 80%",
          padding: "1rem",
          overflow: "auto",
          boxSizing: "border-box",
        }}
      >
        {letterList && renderLetterList(letterList)}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flex: "1 0 20%",
        }}
      >
        <Button
          text={"편지 보내기"}
          width={"50%"}
          onClickEvent={() => {
            goPage(`/write-letter`);
          }}
        ></Button>
        <Button
          text={"돌아가기"}
          width={"50%"}
          onClickEvent={() => {
            goPage(`/user/${router?.pathname.split("/")[2]}`);
          }}
        ></Button>
      </div>
    </BasicContainer>
  );
}

export default LetterByDate;
