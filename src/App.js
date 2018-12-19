import React, { Component } from "react";
import "./App.css";
import NavBar from "../src/Components/NavBar/navbar";
import Body from "../src/Components/Body/body";

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
