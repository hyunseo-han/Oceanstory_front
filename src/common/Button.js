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
    background: #f8cba6;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    cursor: pointer;

    text-decoration: none;
    font-family: "Saira";
    font-style: normal;
    font-weight: 800;
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
