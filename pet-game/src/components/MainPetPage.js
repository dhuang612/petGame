import React, { Component } from 'react';

class MainPetPage extends Component {
  constructor(props) {
    super(props);
  }
  selectPet = num => {
    const randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);
  };
  render() {
    return (
      <div>
        <h1> Main page</h1>
        {this.selectPet()}
      </div>
    );
  }
}
export default MainPetPage;
