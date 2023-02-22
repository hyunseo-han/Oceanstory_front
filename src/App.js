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
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Join"} element={<Join />} />
          <Route path={"/User"} element={<User />} />
          <Route path={"/Letter"} element={<Letter />} />
          <Route path={"/LetterByDate"} element={<LetterByDate />} />
          <Route path={"/WriteLetter"} element={<WriteLetter />} />
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
