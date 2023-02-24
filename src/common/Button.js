import styled from "styled-components";

const ButtonStyle = styled.div`
  & {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: 46.51px;

    position: relative;
    background: linear-gradient(
        109.78deg,
        #788eff 37.44%,
        rgba(255, 255, 255, 0) 196.54%
      ),
      linear-gradient(
        108.83deg,
        #000000 165.46%,
        rgba(255, 255, 255, 0) 210.88%
      );
    border-radius: 9px;
    cursor: pointer;

    text-decoration: none;
    font-family: "Saira";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 124.19%;
    color: #ffffff;
  }
`;

const Button = ({ text, width = "100%", link = null, onClickEvent = null }) => {
  return (
    <>
      <ButtonStyle
        width={width}
        onClick={() => {
          onClickEvent && onClickEvent();
        }}
      >
        {text}
      </ButtonStyle>
    </>
  );
};

export default Button;
