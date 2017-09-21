import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import NotFound from './NotFound/NotFound';

const Main = () => (
  <div className="container main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Main;