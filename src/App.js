import React, { Component } from "react";
import "./App.css";
import NavBar from "../src/components/navbar/navbar";
import Body from "../src/components/body/body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Body />
      </div>
    );
  }
}

export default App;
