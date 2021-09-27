import React, { Component } from "react";

// Components
import NavBar from "./components/NavBar";
import "./components/NavBar.css";

let city = "Buenos Aires";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 style={{ textAlign: "center"}}>
          Tienda de Videojuegos
        </h1>
        <p style={{ textAlign: "center"}}>La mejor plataforma de videojeugos de {city}</p>
      </div>
    );
  }
}

export default App;
