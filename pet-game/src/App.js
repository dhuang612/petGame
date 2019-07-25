import React, { Component } from 'react';
import MainPage from './components/MainPetPage';
import './App.css';
import feline from './assets/images/cat.jpeg';
import dino from './assets/images/dinosaur.jpeg';
import canine from './assets/images/dog.jpeg';
import elephant from './assets/images/elephant.jpeg';
import fish from './assets/images/fish.jpeg';
import fox from './assets/images/fox.jpeg';
import lizard from './assets/images/lizard.jpeg';
import rabbit from './assets/images/rabbit.jpeg';
import racoon from './assets/images/racoon.jpeg';
import turtle from './assets/images/turtle.jpeg';
import animalData from './components/animalData';

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
