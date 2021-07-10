import React from "react";
// Components
import Header from "./components/Header";
// Stlyes
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
    </div>
  );
};

export default App;
