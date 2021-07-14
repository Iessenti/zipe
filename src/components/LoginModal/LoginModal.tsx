import React from 'react';
import { Formik, Field, Form } from "formik";
import { LoginType } from 'store/types/user';


type LoginModalType = {
    schema: any;
    initialVals: LoginType;
    handleSubmit: (values: LoginType) => void;
}

const LoginModal = ({ schema, initialVals, handleSubmit }: LoginModalType) => (
    <Formik
        initialValues={initialVals}  
        validationSchema={schema}
        onSubmit={handleSubmit}
        >
        { ({ errors, touched }) => (
            <Form>
                <label htmlFor="email">Email</label>
                <Field 
                    name='email'
                    type='email'
                    placeholder='Введите email'
                />
                { errors.email && touched.email && <div>{errors.email}</div> }

                <label htmlFor="password">Password</label>
                <Field
                    name='password'
                    type='password'
                    placeholder='Придумайте пароль'
                />
                { errors.password && touched.password && <div>{errors.password}</div> }

                <button type="submit">Enter</button>
            </Form>
        )}
    </Formik>
)

export { LoginModal }