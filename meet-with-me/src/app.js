import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import loadable from '@loadable/component';
import useLogin from './hooks/use-login';
import useLogout from './hooks/use-logout';
import Header from './components/header';

const Home = loadable(() => import('./scenes/home'));
const About = loadable(() => import('./scenes/about'));
const Dashboard = loadable(() => import('./scenes/dashboard'));
const Oops = loadable(() => import('./scenes/oops'));

export default function Router() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { googleSignIn } = useLogin(setIsSignedIn);
  const { googleSignOut } = useLogout(setIsSignedIn);

  return (
    <div>
      <Header googleSignOut={googleSignOut} isSignedIn={isSignedIn} />

      <Switch>
        <Route exact path="/">
          <Home googleSignIn={googleSignIn} />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/">
          <Oops />
        </Route>
      </Switch>
    </div>
  );
}
