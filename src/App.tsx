import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './Component/Greet';
import { Status } from './Component/Status';
import { Heading } from './Component/Heading';
import { Oscar } from './Component/Oscar';
import { HandleEvent } from './Component/HandleEvent';
import { Container } from './Component/Container';
import { LoggedIn } from './Component/State/LoggedIn';

function App() {
  return (
    <div className="App">
      {/* <Greet name='World' count={10} loggedin={true}/> */}
      {/* <Status status='success'/> */}
      {/* <Heading>Hello World</Heading> */}
      {/* <Oscar><Heading>Oscar Hero = Leonardo Dicaprio</Heading></Oscar> */}
      {/* <HandleEvent /> */}
      {/* <Container style={{border: '1px solid black', padding: '1rem'}}/> */}
      <LoggedIn />
    </div>
  );
}

export default App;
