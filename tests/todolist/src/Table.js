import React, { Component } from 'react';
import NewTask from './NewTask';

const isSearched = searchTerm => {
  return function(item) {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  };
};

class Table extends Component {
  render() {
    const { toDoList, pattern, onDismiss } = this.props;
    return (
      <div>
        {toDoList.filter(isSearched(pattern)).map(item => (
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.completed}</span>
            <span>
              <button onClick={() => onDismiss(item.objectID)} type="button">
                completed
              </button>
            </span>
          </div>
        ))}
        <div>
          <span>
            <button>Add new task</button>
          </span>
        </div>
      </div>
    );
  }
}
export default Table;
