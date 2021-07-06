import React from 'react';
import { useRouteMatch } from "react-router";
import { AuthContainer } from 'containers/AuthContainer';
import { AuthPageTypes } from 'consts';
import { routes } from 'routes';

import 'assets/sass/authPage.sass';

const AuthPage = () => {        

    let currentPageType = AuthPageTypes.code;

    const isLoginPage = useRouteMatch(routes.login);
    const isRegistrationPage = useRouteMatch(routes.registration);

    if (isLoginPage) {
        currentPageType = AuthPageTypes.login;
    } else if (isRegistrationPage) {
        currentPageType = AuthPageTypes.registration;
    }

    return <AuthContainer authPageType={currentPageType}/>;
}

export { AuthPage };