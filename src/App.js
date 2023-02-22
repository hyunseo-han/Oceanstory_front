import "./App.css";
import Main from "./Main";
import Login from "./login/Login";
import Join from "./login/Join";
import User from "./User/User";
import Letter from "./Letter/Letter";
import LetterByDate from "./LetterByDate/LetterByDate";
import WriteLetter from "./WriteLetter/WriteLetter";
import SuccessfullySended from "./SuccessfullySended/SuccessfullySended";

import { GlobalStyle } from "./style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/join"} element={<Join />} />
          <Route path={"/user"} element={<User />} />
          <Route path={"/letter"} element={<Letter />} />
          <Route path={"/letter-by-date"} element={<LetterByDate />} />
          <Route path={"/write-letter"} element={<WriteLetter />} />
          <Route
            path={"/SuccessfullySended"}
            element={<SuccessfullySended />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
