import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import loadable from '@loadable/component'

const Home = loadable(() => import('./scenes/home'))
const About = loadable(() => import('./scenes/about'))
const Dashboard = loadable(() => import('./scenes/dashboard'))
const Oops = loadable(() => import('./scenes/oops'))

export default function Router() {
  return (
    <div>
      <h3>
        <Link to='/'>Home</Link>
      </h3>

      <hr />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/dashboard'>
          <Dashboard />
        </Route>

        <Route path='/'>
          <Oops />
        </Route>
      </Switch>
    </div>
  );
}
