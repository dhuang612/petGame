import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Item from './BookDetail';
import './App.css';
console.log(process.env.REACT_APP_NYT_API_KEY, process.env.NODE_ENV);
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:title" component={Item} />
          <Shop />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => {
  return (
    <div>
      <h1>Home Page </h1>
    </div>
  );
};
export default App;
