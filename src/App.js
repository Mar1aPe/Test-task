import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProfilePic from './components/ProfilePic';
import ContentView from './components/ConntentView'

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header>
            {<Header />}
          </header>
          <nav>
            {<Navbar />}
          </nav>
          <main>
            {<ContentView />}
          </main>
        </div>
      </Router>


    );
  }
}

export default App;
