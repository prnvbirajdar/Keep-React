import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <div className="pt-16"></div>
        <Main />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
