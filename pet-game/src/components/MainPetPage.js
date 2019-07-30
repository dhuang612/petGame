import React, { Component } from 'react';

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
  displayImages = () => {
    const images = require.context('../../public/images', true, /\.(|jpe?g|)$/);
    const dino = images('./dinosaur.jpeg');
    return dino;
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
        <img src={this.displayImages()} />
      </div>
    );
  }
}
export default MainPetPage;

/*
well, in general, you can't reliably check the 
state except in render or if you use the function callback version



*/
