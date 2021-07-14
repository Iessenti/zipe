import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginType } from 'store/types/user'
import { loginAction, } from 'store/actions'
import { LoginModal } from 'components/LoginModal';
import { LoginSchema } from 'schemas'

const LoginContainer = () => {

    const dispatch = useDispatch();

    const mapInitialValues = (): LoginType => ({
        email: '',
        password: ''
    })

    const handleForm = (values: LoginType) => {
        dispatch(loginAction(values))
    }

    return (
        <div className="auth-form--wrapper">
            <LoginModal schema={LoginSchema} initialVals={mapInitialValues()} handleSubmit={handleForm}/>
        </div>
    )
}

export { LoginContainer }