import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Login } from './pages';

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
