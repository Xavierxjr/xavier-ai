import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CsvReader from './pages/CsvReader';
import Rewards from './pages/Rewards';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/CsvReader' component={CsvReader} />
          <Route path='/Rewards' component={Rewards} />
          <Route path='/Support' component={Support} />
        </Switch>
      </Router>
    </>

  )
}

export default App