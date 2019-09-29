import React from 'react';
import logo from './logo.svg';
//import './scss/main.scss';
import './App.css';
import Login from './Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path='/' component={() => <h1>Hello</h1>} />
          <Route exact path='/login' component={() => <Login></Login>} />
        </div>
      </Router>
    </div>
  );
}

export default App;
