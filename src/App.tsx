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
import Counter from './Component/Class/Counter';
import { ThemeContext } from './Component/State/Context/ThemeContext';
import { Box } from './Component/State/Context/Box';
import { UserContext } from './Component/State/Context/UserContext';
import { DomRef } from './Component/Ref/DomRef';
import { MutableRef } from './Component/Ref/MutableRef';
import { Private } from './Component/Auth/Private';
import { Profile } from './Component/Auth/Profile';
import { ListClass } from './Component/Generics/ListClass';
import { RandomNumber } from './Component/Restriction/RandomNumber';
import { Toast } from './Component/TemplateLiterals/Toast';
import Button from './Component/CustomComponent/Button';
import { Input } from './Component/CustomComponent/Input';

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
      {/* <MutableRef /> */}
      {/* <Counter message="The count value is"/> */}
      {/* <Private isLoggedin={true} component={Profile}/> */}
      {/* <ListClass /> */}
      {/* <RandomNumber value={24} isPositive={true}/> */}
      {/* <Toast position='center'/> */}
      <Input type="text" placeholder='Name'/>
      <Button variant='primary' onClick={() => console.log("clicked")}>Submit</Button>
    </div>
  );
}

export default App;
