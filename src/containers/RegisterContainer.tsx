import React from 'react'
import { useDispatch } from 'react-redux'
import { RegistrationType } from 'store/types/user'
import { registerAction } from 'store/actions'

import { RegistrationModal } from 'components/RegistrationModal';
import { RegistrationSchema } from 'schemas'

const RegisterContainer = () => {

    const dispatch = useDispatch();

    const mapInitialValues = (): RegistrationType => ({
        first_name: '',
        last_name: '',
        email: '',
        type: '',
        password: '',
        password_double: ''
    })


    const handleForm = (values: RegistrationType) => {
        dispatch(registerAction({...values, type: "customer"}))
    }

    return (
        <div className="auth-form--wrapper">
            <RegistrationModal schema={RegistrationSchema} initialVals={mapInitialValues()} handleSubmit={handleForm}/>
        </div>
    )
}

export { RegisterContainer }