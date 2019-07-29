import React, { Component } from 'react';

import cat from '../assets/images/cat.jpeg';
import dino from '../assets/images/dinosaur.jpeg';
import dog from '../assets/images/dog.jpeg';
import elephant from '../assets/images/elephant.jpeg';
import fish from '../assets/images/fish.jpeg';
import fox from '../assets/images/fox.jpeg';
import lizard from '../assets/images/lizard.jpeg';
import rabbit from '../assets/images/rabbit.jpeg';
import racoon from '../assets/images/racoon.jpeg';
import turtle from '../assets/images/turtle.jpeg';
import animalData from '../components/animalData';

class MainPetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTier: ['cat', 'dog', 'fish', 'lizard'],
      secondTier: ['rabbit', 'turtle', 'fox'],
      thirdTier: ['racoon', 'dino', 'elephant']
    };
  }
  componentDidUpdate = () => {};

  //accounting for rarity 3 is the hardest to get and 1 is the easiest.
  rollPetRarity = () => {
    //you can reroll for a pet twice
    let rollResult = '';

    const randomNum = Math.floor(Math.random() * 4) - 0.65;
    if (randomNum < 0 || randomNum < 1) {
      return (rollResult = 1);
    } else if (randomNum > 1 && randomNum < 2) {
      return (rollResult = 2);
    } else {
      return (rollResult = 3);
    }

    return rollResult;
  };

  randomPetSelection = tiers => {
    let random = Math.random();
    let pets = [];
    const rolledNum = this.rollPetRarity();
    console.log(rolledNum);
    if (rolledNum === 1) {
      pets = [...this.state.firstTier];
      let totalPets = pets.length;
      let randomIndex = Math.floor(random * totalPets);
      let randomPet = pets[randomIndex];
      return randomPet;
    }
    if (rolledNum === 2) {
      pets = [...this.state.secondTier];
      let totalPets = pets.length;
      let randomIndex = Math.floor(random * totalPets);
      let randomPet = pets[randomIndex];
      return randomPet;
    } else if (rolledNum === 3) {
      pets = [...this.state.thirdTier];
      let totalPets = pets.length;
      let randomIndex = Math.floor(random * totalPets);
      let randomPet = pets[randomIndex];
      return randomPet;
    }
  };

  render() {
    return (
      <div>
        <h1> Main page</h1>
        {this.randomPetSelection()}
        <img src={this.randomPetSelection} />
      </div>
    );
  }
}
export default MainPetPage;

/*
well, in general, you can't reliably check the 
state except in render or if you use the function callback version



*/
