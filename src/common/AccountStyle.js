import Styled from "styled-components";

export const AccountContainer = Styled.section`
&{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.title {
    position: relative;
    height: 59px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 133.19%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    letter-spacing: 0.22em;
    backdrop-filter: blur(2px);
  }

  div.input-wrap {
    position: relative;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    div.text {
      position: relative;
      width: 228px;
      height: 48px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 124.19%;
      display: flex;
      align-items: center;
      color: #7e7e7e;
      margin: auto; 
    }

    div.err-msg {
      color: red;
      font-size: 0.6rem;
      text-align: left;
      padding: 0.2rem;
    }

    input {

    }
  }
}
`;

export const InputBox = Styled.input`
  position: relative;
  width: 228px;
  height: 40px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
`;

export const PasswordBox = Styled(InputBox).attrs({
  type: "password",
})``;
