import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.working 
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  
  
  
  
  render() {
    const working = this.state.working ? 'working' : 'pause';
    return (
      <div className="App">
        <header className="App-header">
          <div className="Logo">
            <img src={logo} className={working} alt="logo" />
            <button 
              onClick={this.handleClick}
            >
              {working.toUpperCase()}
            </button>
          </div>
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
      </div>
    );
  }
}

export default App;