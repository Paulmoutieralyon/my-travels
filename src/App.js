import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Quote
          destination="J'aime ce pays !!!!"
          pays="Vegas"
          image="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
          distance="8736 KM "
        />
        <Quote
          destination="Le pays de mes rêves !!!"
          pays="Japon"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbwC1_7_iFRw8ym_EDQFYXHRZMl5O53J4NwaoLBUBft7GJj4VeA"
          distance="9 844 km "        
          />
      </div>
    );
  }
}

export default App;