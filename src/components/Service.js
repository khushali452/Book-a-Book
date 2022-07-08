import React from 'react'
import styled from 'styled-components';
import How from "../img/how.png";

const Container=styled.div`
  display:flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
  `;
const Image = styled.img`
display: ${(props) => props.open && "none"};
height: 100%;
width: 90%;
margin-left: 100px;
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;



const Service = () => {
  return (
    <Container>
        <Left>
            <Image src={How}/>
        </Left>
        <Right>

        </Right>
    </Container>
  )
}

export default Service