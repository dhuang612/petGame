import React, { Component } from 'react';
import MainPage from './components/MainPetPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Pet Game</h1>
        <MainPage />
      </div>
    );
  }
}
export default App;
