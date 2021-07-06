import React from 'react';
import { Formik, Field, Form } from "formik";
import { CodeConfirmationType } from 'store/types/user';


type CodeConfirmationModalType = {
    schema: any;
    initialVals: CodeConfirmationType;
    handleSubmit: (values: CodeConfirmationType) => void;
}

const CodeConfirmationModal = ({ schema, initialVals, handleSubmit }: CodeConfirmationModalType) => (
    <Formik
        initialValues={initialVals}  
        validationSchema={schema}
        onSubmit={handleSubmit}
        >
        { ({ errors, touched }) => (
            <Form>
                <label htmlFor="code">Code</label>
                <Field 
                    name='code'
                    type='text'
                    placeholder='Введите код'
                />
                { errors.code && touched.code && <div>{errors.code}</div> }

                <button type="submit">Enter</button>
            </Form>
        )}
    </Formik>
)

export { CodeConfirmationModal }