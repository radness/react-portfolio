import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Project} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;