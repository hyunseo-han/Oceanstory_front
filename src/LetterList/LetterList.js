import React from "react";

import Styled from "styled-components";

const Div = Styled.div`
width: 500px;
height: auto;
border: 2px solid black;
background-color: #66B2FF;
box-sizing: border-box;
align-items: center;
margin-left : auto;
margin-right : auto;
margin-top : 20px;
margin-bottom : 20px;
`;

function LetterList({ letters }) {
  return (
    <div>
      {letters &&
        letters.map((letter) => {
          return (
            <Div key={letter.id}>
              <br />
              name : {letter.name} <br />
              username : {letter.username} <br />
              email : {letter.email} <br />
              address.street : {letter.address.street} <br />
              address.suite : {letter.address.suite} <br />
              address.city : {letter.address.city} <br />
              address:zipcode : {letter.address.zipcode} <br />
              address.geo.lat : {letter.address.geo.lat} <br />
              address.geo.lng : {letter.address.geo.lng} <br />
              phone : {letter.phone} <br />
              website : {letter.website} <br />
              company.name : {letter.company.name} <br />
              company.catchPhrase : {letter.company.catchPhrase} <br />
              compnay.bs : {letter.company.bs} <br />
              <br />
              위에 지우고 아래만 남기면 될 듯! <br /> <br />
              id : {letter.id} <br />
              sendAt : {letter.id} <br />
              sender : {letter.sender} <br />
              title : {letter.title} <br />
              content : {letter.content} <br />
              receiver_username : {letter.receiver_username} <br />
              <br />
            </Div>
          );
        })}
    </div>
  );
}

export default LetterList;
