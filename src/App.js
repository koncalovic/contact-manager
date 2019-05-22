import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <Container>
            <Contacts />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
