import React, { Component } from 'react';

class MainPetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petTier: []
    };
  }
  componentDidUpdate = () => {};

  //accounting for rarity 3 is the hardest to get and 1 is the easiest.
  rollPetRarity = () => {
    //you can reroll for a pet twice
    const rollResult = [];

    while (rollResult.length === 0) {
      const randomNum = Math.floor(Math.random() * 4) - 0.65;
      if (randomNum < 0 || randomNum < 1) {
        rollResult.push(1);
      } else if (randomNum > 1 && randomNum < 2) {
        rollResult.push(2);
      } else {
        rollResult.push(3);
      }
      return rollResult;
    }

    this.setState({ petTier: rollResult }, () =>
      console.log(this.state.petTier)
    );
  };

  getPet = petTier => {
    if (petTier === 1) {
      let firstTier = ['cat', 'dog', 'fish', 'lizard'];
      return 1;
    }
    if (petTier === 2) {
      let secondTier = ['rabbit', 'turtle', 'fox'];
      return 2;
    }
    if (petTier === 3) {
      let thirdTier = ['racoon', 'dino', 'elephant'];
      return 3;
    }
  };

  render() {
    const { petTier } = this.state;
    return (
      <div>
        <h1> Main page</h1>
        {console.log(petTier)}
        {this.rollPetRarity()}
      </div>
    );
  }
}
export default MainPetPage;

/*
well, in general, you can't reliably check the 
state except in render or if you use the function callback version


trying to call this.setState is causing the following error:
this.setState({
      petTier: results.roll
    });

    Maximum update depth exceeded. This can happen when a
     component repeatedly calls setState inside 
    componentWillUpdate or componentDidUpdate. 
    React limits the number of nested updates to prevent infinite loops.



      const results = rollResult.map(item => ({
      results: item
    }));
*/
