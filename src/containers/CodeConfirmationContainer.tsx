import React from 'react'
import { useDispatch } from 'react-redux'
import { CodeConfirmationType } from 'store/types/user'
import { sendRegisterCodeAction } from 'store/actions'

import { CodeConfirmationModal } from 'components/CodeConfirmationModal';
import { CodeSchema } from 'schemas'

const CodeConfirmationContainer = () => {

    const dispatch = useDispatch();

    const mapInitialValues = (): CodeConfirmationType => ({
        code: '',
    })

    const handleForm = (values: CodeConfirmationType) => {
        dispatch(sendRegisterCodeAction(values.code))
    }

    return (
        <div className="auth-form--wrapper">
            <CodeConfirmationModal schema={CodeSchema} initialVals={mapInitialValues()} handleSubmit={handleForm}/>
        </div>
    )
}

export { CodeConfirmationContainer }