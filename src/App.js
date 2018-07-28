import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo';
import Button from './components/button';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Button>Click Me</Button>
        <Button primary>IM MORE IMPORTANT</Button>
        <Logo />
        <Player />
      </div>
    );
  }
}

export default App;
