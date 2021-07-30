import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { CSSTransition } from 'react-transition-group'

import { routes } from 'routes';

import { AuthPage } from 'pages/AuthPage';
import { MainPage } from 'pages/MainPage';
import { SignOutPage } from 'pages/SignOutPage';
import { CreateOrderPage } from 'pages/CreateOrderPage';
import { FoundPerformersPage } from 'pages/FoundPerformersPage';
import { WalletPage } from 'pages/WalletPage';
import { WalletSettingsPage } from 'pages/WalletSettingsPage';
import { NotificationsPage } from 'pages/NotificationsPage';

import { Navbar, Footer } from 'components/CommonComponents';
import { ProfilePopupContainer } from 'containers/ProfilePopupContainer';
import { OverlayContext } from 'shared/Context';
import { NotificationsPopupContainer } from 'containers/NotificationsPopupContainer';

const App = () => {

  const [isOverlay, setIsOverlay] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>

        <Navbar/>

        <ProfilePopupContainer/>

        <NotificationsPopupContainer/>
            
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

          <Route path={[routes.orderCreate, routes.orderSearch]} exact>
            <CreateOrderPage/>
          </Route>
        
          <Route path={routes.performersFound} exact>
            <FoundPerformersPage />
          </Route>

          <Route path={routes.wallet} exact>
            <OverlayContext.Provider value={{isOverlay, setIsOverlay}}>
              <WalletPage/>
            </OverlayContext.Provider>
          </Route>

          <Route path={routes.walletSettings} exact>
            <WalletSettingsPage />
          </Route>

          <Route path={routes.notifications} exact>
            <NotificationsPage/>
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
    </DndProvider>

  )
}

export default App;
