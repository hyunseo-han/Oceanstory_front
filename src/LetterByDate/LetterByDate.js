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
  display: flex;
  justify-content: center;
  align-items: center;
  

  > div {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    
    display: flex;
    align-items: center;
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

  background: #FFFBEB;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: rgb(63 81 181 / 10%) 0px 0px 8px 0px;

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
  const [letterList, setLetterList] = useState(null);

  const goPage = useCallback(
    async (link) => {
      navigate(link);
    },
    [router]
  );

  const getLetterData = useCallback(async () => {
    const userName = router.pathname.split("/")[2];
    axios
      .get(`/letter/list/${userName}/`, {
        headers: {
          "Content-Type": `application/json`,
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        setLetterList(response.data);
      })
      .catch((response) => {
        alert("편지 정보를 불러올 수 없습니다.");
      });
  }, [router]);

  useEffect(() => {
    if (router) {
      getLetterData();
    }
  }, [router]);

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
              <div>{timeZone}</div>
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
                    <ContentContainer width={"30%"} key={letter.id}>
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
          width={"70%"}
          onClickEvent={() => {
            goPage(`/write-letter`);
          }}
        ></Button>
        <Button
          text={"돌아가기"}
          width={"70%"}
          onClickEvent={() => {
            goPage(`/user/${router?.pathname.split("/")[2]}`);
          }}
        ></Button>
      </div>
    </BasicContainer>
  );
}

export default LetterByDate;
