import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const Container = styled.div`
    height: 100vh;
    
`

const App = () => {
  return (
    <div><Container>
      <Navbar/>
      </Container></div>
  )
};

export default App;
