import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import Container from "react-bootstrap/Container";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <Container>
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
