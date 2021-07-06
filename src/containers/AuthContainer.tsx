import React from 'react'
import { useDispatch } from 'react-redux'
import { CodeConfirmationType, LoginType, RegistrationType } from 'store/types/user'
import { loginAction, registerAction } from 'store/actions'
import { AuthPageTypes } from 'consts'

import { RegistrationModal } from 'components/RegistrationModal';
import { LoginModal } from 'components/LoginModal';
import { CodeConfirmationModal } from 'components/CodeConfirmationModal';
import { CodeSchema, LoginSchema, RegistrationSchema } from 'schemas'

type AuthContainerType = {
    authPageType: string;
}

export const AuthContainer = ({ authPageType }: AuthContainerType) => {

    const dispatch = useDispatch();

    const mapInitialRegistrationValues = (): RegistrationType => ({
        first_name: '',
        last_name: '',
        email: '',
        type: '',
        password: '',
        password_double: ''
    })

    const mapInitialLoginValues = (): LoginType => ({
        email: '',
        password: ''
    })

    const mapInitialCodeConfirmationValues = (): CodeConfirmationType => ({code: ''})

    const handleSubmitLoginForm = (values: LoginType) => {
        dispatch(loginAction(values))
    }

    const handleSubmitRegistrationForm = (values: RegistrationType) => {
        dispatch(registerAction({...values, type: "customer"}))
    }

    const handleSubmitCodeConfirmationForm = (values: CodeConfirmationType) => {
        console.log(values)
    }

    if (authPageType === AuthPageTypes.registration) {
        return (
            <div className="auth-form--wrapper">
                <RegistrationModal schema={RegistrationSchema} initialVals={mapInitialRegistrationValues()} handleSubmit={handleSubmitRegistrationForm}/>
            </div>
        )
    }

    if (authPageType === AuthPageTypes.login) {
        return (
            <div className="auth-form--wrapper">
                <LoginModal schema={LoginSchema} initialVals={mapInitialLoginValues()} handleSubmit={handleSubmitLoginForm}/>
            </div>
        )
    } 

    return (
        <div className="auth-form--wrapper">
            <CodeConfirmationModal schema={CodeSchema} initialVals={mapInitialCodeConfirmationValues()} handleSubmit={handleSubmitCodeConfirmationForm}/>
        </div>
    )
}