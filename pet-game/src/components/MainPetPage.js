import React, { Component } from 'react';

class MainPetPage extends Component {
  constructor(props) {
    super(props);
  }
  //accounting for rarity 3 is the hardest to get and 1 is the easiest.
  RollPetRarity = () => {
    //you can reroll for a pet twice

    const randomNum = Math.floor(Math.random() * 4) - 0.65;

    if (randomNum < 0 || randomNum < 1) {
      return 1;
    } else if (randomNum > 1 && randomNum < 2) {
      return 2;
    } else {
      return 3;
    }
  };
  GetPet = num => {
    console.log(this.RollPetRarity());

    if (num === 1) {
      let firstTier = ['cat', 'dog', 'fish', 'lizard'];
    }
    if (num === 2) {
      let secondTier = ['rabbit', 'turtle', 'fox'];
    }
    if (num === 3) {
      let thirdTier = ['racoon', 'dino', 'elephant'];
    }
  };

  render() {
    return (
      <div>
        <h1> Main page</h1>
        {this.GetPet()}
      </div>
    );
  }
}
export default MainPetPage;
