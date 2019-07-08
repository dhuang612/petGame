import React, { Component } from 'react';

import './App.css';

const questions = [
  {
    question: 'When was American formed?',
    answer: 1776
  },
  {
    question: 'When was the last state to join the union?',
    answer: 'Hawaii'
  },
  {
    question: 'what is the fourth day of the week?',
    answer: 'Thursday'
  },

  {
    question: 'When is the official start to summer?',
    answer: 'June'
  },

  {
    question: 'Are bluegills a freshwater or saltwater fish?',
    answer: 'fresh water'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: []
    };
  }
  handleSubmit = e => {
    alert('You submitted the following answers ' + this.state.responses);
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ responses: e.target.value });
    console.log(this.state.responses);
  };

  render() {
    return (
      <div className="App">
        <h1>questions game!</h1>
        <form onSubmit={this.handleSubmit}>
          {questions.map(({ question }) => (
            <div>
              {question} <br />
              <span>
                Answer:
                <input
                  type="text"
                  name="answer"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </span>
            </div>
          ))}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;
