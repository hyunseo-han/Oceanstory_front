import React, { useState, useEffect } from "react";
import axios from "axios";
import LetterList from "./LetterList";

const Letter = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    // 여기 링크만 바꿔주면 될 듯??
    axios
      .get("https://e68c-125-191-175-172.jp.ngrok.io/letter/list/choimj/")
      .then((response) => {
        setLetters(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Letters</h1>
      <LetterList letters={letters} />
    </div>
  );
};

export default Letter;
