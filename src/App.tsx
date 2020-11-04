import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';

import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  ); 
}

export default App;
