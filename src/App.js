import React from 'react';
import styled , { css } from 'styled-components';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    
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

const App = () => {
  return (
    <Container>
      <Navbar/>
      <Intro/>
      <IntoShape />
      </Container>
  )
};

export default App;
