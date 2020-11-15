import React, { useState } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import loadable from '@loadable/component'
import useLogin from './hooks/use-login';
import useLogout from './hooks/use-logout';

const Home = loadable(() => import('./scenes/home'))
const About = loadable(() => import('./scenes/about'))
const Dashboard = loadable(() => import('./scenes/dashboard'))
const Oops = loadable(() => import('./scenes/oops'))

export default function Router() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { googleSignIn } = useLogin(setIsSignedIn);
  const { googleSignOut } = useLogout(setIsSignedIn);

  return (
    <div>
      <h3>
        <Link to='/'>Home</Link>
      </h3>
      <div>
        {isSignedIn
          ?
            <button type='button' onClick={googleSignOut}>
              Sign out
            </button>
          :
            <button type='button' onClick={googleSignIn}>
              Sign in with Google
            </button>
        }
      </div>

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
