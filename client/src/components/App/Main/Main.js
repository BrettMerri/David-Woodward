import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import NotFound from './NotFound/NotFound';
import './Main.css';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about-david' component={About}/>
    <Route component={NotFound} />
  </Switch>
);

export default Main;