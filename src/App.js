import React from "react";
import Navbar from "./components/Navbar";
import { Wrapper, Nav, Main } from "./styled";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import StudentsInfo from "./components/StudentsInfo";
const App = () => {
  return (
    <Wrapper className="App">
      <Nav>
        <Navbar />
      </Nav>
      <Main>
        <Route exact path="/" component={Home} />
        <Route exact path="/students" component={StudentsInfo} />
      </Main>
    </Wrapper>
  );
};

export default App;
