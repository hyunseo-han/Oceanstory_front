import "./App.css";
import Main from "./Main";
import Login from "./login/Login";
import Join from "./login/Join";
import User from "./User/User";
import LetterByDate from "./LetterByDate/LetterByDate";
import WriteLetter from "./WriteLetter/WriteLetter";
import SuccessfullySended from "./SuccessfullySended/SuccessfullySended";
import Letters from "./LetterList/Letter";
import ReceivedLetter from "./ReceivedLetter/ReceivedLetter";
import { GlobalStyle } from "./style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const AppLayout = styled.section`
   {
    & {
      min-width: 500px;
      width: 50vw;
      height: 100vh;
      margin: 0 auto;
      background: #ecf9ff;
      overflow-y: auto;

      div::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }

      div {
        box-sizing: border-box;
      }
    }

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Join />} />
          <Route path={"/user/:userName"} element={<User />} />
          <Route
            path={"/letter-by-date/:userName"}
            element={<LetterByDate />}
          />
          <Route path={"/write-letter"} element={<WriteLetter />} />
          <Route
            path={"/SuccessfullySended"}
            element={<SuccessfullySended />}
          />
          <Route path={"/Letters"} element={<Letters />} />
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
