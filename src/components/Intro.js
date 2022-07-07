import React from 'react'
import styled from 'styled-components'
import women from '../img/women.png'
import AnimatedShapes from './AnimatedShapes'

const Container=styled.div`
height: calc(100vh - 50px);
display: flex;
padding:20px ;
`
const Left=styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Right=styled.div`
width: 40%;
`
const Title=styled.h1`
width: 60%;
font-size: 60px;
`
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact =styled.div`
display: flex;
flex-direction: column;
`;

const Phone= styled.span`
    color: #f0667d;
`;

const ContactText=styled.span`
color: gray;
`
const Image = styled.img`
    width: 160%;
    height: 100%;
`


const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Your searches end here !</Title>
            <Desc>
            Books are a uniquely portable magic. And we port this magic on click at your doorsteps.
            We intend to make reading books a hassle free, cost effective and pleasurable experience.
            
        </Desc>
        <Info>
          <Button>GET MEMBERSHIP </Button>
          <Contact>
            <Phone>CALL US (091) 123-456789</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>

        </Left>
        <Right><Image src={women}></Image></Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Intro