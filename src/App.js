import "./App.css";
import Main from "./Main";
import Login from "./login/Login";
import Join from "./login/Join";
import User from "./User/User";
import Letter from "./Letter/Letter";
import LetterByDate from "./LetterByDate/LetterByDate";
import WriteLetter from "./WriteLetter/WriteLetter";
import SuccessfullySended from "./SuccessfullySended/SuccessfullySended";
import Letters from "./LetterList/Letter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const AppLayout = styled.section`
   {
    & {
      min-width: 500px;
      width: 50vw;
      height: 100vh;
      margin: 0 auto;
      background: linear-gradient(
          187.08deg,
          #91c7ff 5.52%,
          rgba(255, 255, 255, 0) 106.67%
        ),
        #bfb0ff;
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
          <Route path={"/letter"} element={<Letter />} />
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
