import React from "react";
import { useState } from "react";
import styled from "styled-components";

const InputText = styled.textarea`
  all: unset;
  display: block;
  width: 100%;
  height: ${({ row, theme }) => +theme.listSize * row + 4}px;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;
`;

function Text() {
  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });

  const resizeTextarea = (e) => {
    const { scrollHeight, clientHeight, value } = e.target;

    // 줄바꿈이 일어날 때
    if (scrollHeight > clientHeight) {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
      }));
    }

    // 텍스트 지워서 줄바꿈 지점에 도달했을 때
    if (textareaHeight.lineBreak[value.length]) {
      setTextareaHeight((prev) => ({
        row: prev.row - 1,
        lineBreak: { ...prev.lineBreak, [value.length]: false },
      }));
    }
  };

  const onKeyEnter = (e) => {
    if (e.code === "Enter") {
      setTextareaHeight((prev) => ({
        row: prev.row + 1,
        lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
      }));
    }
  };

  return (
    <InputText
      autoComplete="off"
      //   onInput={onInput}
      onKeyDown={onKeyEnter}
      row={textareaHeight.row}
    />
  );
}

export default Text;
