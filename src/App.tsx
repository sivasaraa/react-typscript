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
import { User } from './Component/State/Context/User';
import { Counter } from './Component/State/Counter';
import { ThemeContext } from './Component/State/Context/ThemeContext';
import { Box } from './Component/State/Context/Box';
import { UserContext } from './Component/State/Context/UserContext';
import { DomRef } from './Component/Ref/DomRef';
import { MutableRef } from './Component/Ref/MutableRef';

function App() {
  return (
    <div className="App">
      {/* <Greet name='World' count={10} loggedin={true}/> */}
      {/* <Status status='success'/> */}
      {/* <Heading>Hello World</Heading> */}
      {/* <Oscar><Heading>Oscar Hero = Leonardo Dicaprio</Heading></Oscar> */}
      {/* <HandleEvent /> */}
      {/* <Container style={{border: '1px solid black', padding: '1rem'}}/> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContext>
        <Box />
      </ThemeContext> */}
      {/* <UserContext>
        <User />
      </UserContext> */}
      {/* <DomRef /> */}
      <MutableRef />
    </div>
  );
}

export default App;
