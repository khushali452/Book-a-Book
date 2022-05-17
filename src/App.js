import React from 'react';
import styled from 'styled-components';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    
`

const App = () => {
  return (
    <Container>
      <Navbar/>
      <Intro/>
      </Container>
  )
};

export default App;
