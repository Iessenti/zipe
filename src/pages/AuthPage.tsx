import React from 'react';
import { useRouteMatch } from "react-router";
import { LoginContainer } from 'containers/LoginContainer';
import { RegisterContainer } from 'containers/RegisterContainer';
import { CodeConfirmationContainer } from 'containers/CodeConfirmationContainer';
import { routes } from 'routes';

import 'assets/sass/authPage.sass';

const AuthPage = () => {        

    const isLoginPage = useRouteMatch(routes.login);
    const isRegistrationPage = useRouteMatch(routes.registration);

    if (isLoginPage) {
        return <LoginContainer/>;
    }
    
    if (isRegistrationPage) {
        return <RegisterContainer/>;
    }

    return <CodeConfirmationContainer/>
}

export { AuthPage };