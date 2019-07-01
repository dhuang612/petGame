import React, { Component } from 'react';
import Table from './Table';
import Search from './Search';
import './App.css';

const toDoList = [
  {
    name: 'Work on programming',
    completed: false,
    severity: 7,
    objectID: 0
  },
  {
    name: 'make more friends',
    completed: false,
    severity: 5,
    objectID: 1
  },
  {
    name: 'buy groceries',
    completed: false,
    severity: 8,
    objectID: 2
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    //the first time you call state you do it like this.
    this.state = {
      toDoList,
      searchTerm: ''
    };
  }
  onDismiss = id => {
    function isNotID(item) {
      return item.objectID !== id;
    }
    const updatedList = this.state.toDoList.filter(isNotID);
    this.setState({ toDoList: updatedList });
  };
  onSearchChange = event => this.setState({ searchTerm: event.target.value });
  render() {
    const { searchTerm, toDoList } = this.state;
    return (
      <div className="App">
        <Search value={searchTerm} onChange={this.onSearchChange} />
        <Table
          toDoList={toDoList}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}
export default App;

/*
open arrow 
Shorter syntactical form (() => {} vs. function () {})
this allows us to not have to write out the word function
*/
