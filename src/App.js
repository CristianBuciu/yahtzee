import React, { Component } from "react";
import Game from "./components/game/Game.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
