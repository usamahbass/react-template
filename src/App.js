import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    var myVar;
    
    function processLoad() {
      myVar = setTimeout(showPage, 5000);
      document.body.style.backgroundColor = "#4e73df";
      document.getElementById("open").style.display = "none";
    }
    
    function showPage() {
      document.getElementById("loader").style.display = "none";
      document.body.style.backgroundColor = "#fff";
      document.getElementById("open").style.display = "grid";
      document.getElementById("open").style.position = "relative";
      document.getElementById("open").style.top = "0";
    }

    return (

      <div onLoad={processLoad}>
        <div className="load" id="loader">
          <div class="items"></div>
          <div class="items"></div>
          <div class="items"></div>
          <div class="items"></div>
          <div class="items"></div>
          <div class="items"></div>
          <div class="items"></div>
        </div>
        <div className="grid-container" id="open">
          <Header />
          <Sidebar />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
