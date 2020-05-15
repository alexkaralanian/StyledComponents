import React from 'react';
import { Button } from './common';
import { createGlobalStyle } from 'styled-components';

const GlobaStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh; 
    margin: 0;
    color: black;
    font-family: "Kaushan Script"
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobaStyle />
      <h1>App</h1>
      <Button>Test</Button>
    </React.Fragment>
  );
}

export default App;
