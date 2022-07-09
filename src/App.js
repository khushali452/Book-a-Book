import React from 'react';
import styled , { css } from 'styled-components';
import Contact from './components/Contact';
import Features from './components/Features';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Footer from './components/Footer';

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
`
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(75% 0, 100% 0%, 100% 100%, 60% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 60% 0%, 30% 100%, 0% 100%);
  background-color: pink;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(30% 0, 100% 0%, 100% 100%, 60% 100%);
  background-color: crimson;
`;

const ContactShape = styled.div`
  ${Shape}
  clip-path: polygon(60% 0, 100% 0%, 100% 100%, 40% 100%);
  background-color: pink;
`;

const App = () => {
  return (
    <>
    <Container>
      <Navbar/>
      <Intro/>
      <IntoShape />
      </Container>
      <Container>
        <Features />
        <FeatureShape/>
      </Container>
      <Container>
        <Price/>
        <PriceShape/>
      </Container>
      <Container>
        <Contact/>
        <Footer/>
        <ContactShape/>
      </Container>
      </>
  )
};

export default App;
