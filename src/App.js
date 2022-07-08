import React from 'react';
import styled , { css } from 'styled-components';
import Features from './components/Features';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Service from './components/Service';

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
  clip-path: polygon(0 0, 60% 0%, 25% 100%, 0% 100%);
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
        <Service />
      </Container>
      </>
  )
};

export default App;
