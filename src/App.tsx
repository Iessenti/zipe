import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import {PrivateRoute} from "components/PrivateRoute"

import { routes } from 'routes';

import { AuthPage } from 'pages/AuthPage';
import { MainPage } from 'pages/MainPage';
import { SignOutPage } from 'pages/SignOutPage';

const App = () => (
  <BrowserRouter>
    <Switch>

      <PrivateRoute path={routes.main} exact>
        <MainPage />
      </PrivateRoute>

      <Route path={[routes.login, routes.registration, routes.code]} exact>
        <AuthPage/>
      </Route>

      <Route path={routes.logout} exact>
        <SignOutPage />
      </Route>

    </Switch>
  </BrowserRouter>
)

export default App;
