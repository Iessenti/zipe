import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import { routes } from 'routes';

import { AuthPage } from 'pages/AuthPage';
import { MainPage } from 'pages/MainPage';
import { SignOutPage } from 'pages/SignOutPage';

import { Navbar, Footer } from 'components/CommonComponents';
import { ProfilePopupContainer } from 'containers/ProfilePopupContainer';
import { OverlayContext } from 'shared/Context';

const App = () => {

  const [isOverlay, setIsOverlay] = useState(false);

  return (
    <BrowserRouter>

      <Navbar/>

      <ProfilePopupContainer/>
          
      <CSSTransition 
          timeout={200}
          in={isOverlay}
          classNames={{
            appear: 'overlay appear',
            appearActive: 'overlay appear-active',
            appearDone: 'overlay appear-done',
            enter: 'overlay enter',
            enterActive: 'overlay enter-active',
            enterDone: 'overlay enter-done',
            exit: 'overlay exit',
            exitActive: 'overlay exit-active',
            exitDone: 'overlay exit-done',
           }}
          unmountOnExit
      >
          <div/>
      </CSSTransition>

      <Switch>

        <Route path={routes.main} exact>
          <OverlayContext.Provider value={{isOverlay, setIsOverlay}}>
            <MainPage/>
          </OverlayContext.Provider>
        </Route>

        <Route path={[routes.login, routes.registration, routes.code]} exact>
          <AuthPage/>
        </Route>

        <Route path={routes.logout} exact>
          <SignOutPage />
        </Route>

      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
