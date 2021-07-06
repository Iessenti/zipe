import React from 'react';
import { Formik, Field, Form } from "formik";
import { RegistrationType } from 'store/types/user';


type RegistrationModalType = {
    schema: any;
    initialVals: RegistrationType;
    handleSubmit: (values: RegistrationType) => void;
}

const RegistrationModal = ({ schema, initialVals, handleSubmit }: RegistrationModalType) => (
    <Formik
        initialValues={initialVals}  
        validationSchema={schema}
        onSubmit={handleSubmit}
        >
        { ({ errors, touched }) => (
            <Form>
                <div role="group" aria-labelledby="my-radio-group">
                    <label htmlFor="type">
                        <Field type="radio" name="type" value="email" />
                    </label>
                    <label htmlFor="type">
                        <Field type="radio" name="type" value="phone" />
                    </label>
                </div>

                <label htmlFor="email">Email</label>
                <Field 
                    name='email'
                    type='email'
                    placeholder='Введите email'
                />
                { errors.email && touched.email && <div>{errors.email}</div> }

                <label htmlFor="email">First name</label>
                <Field 
                    name='first_name'
                    type='text'
                    placeholder='Введите имя'
                />
                { errors.first_name && touched.first_name && <div>{errors.first_name}</div> }

                <label htmlFor="last_name">Last name</label>
                <Field 
                    name='last_name'
                    type='text'
                    placeholder='Введите фамилию'
                />
                { errors.last_name && touched.last_name && <div>{errors.last_name}</div> }

                <label htmlFor="password">Password</label>
                <Field
                    name='password'
                    type='password'
                    placeholder='Придумайте пароль'
                />
                { errors.password && touched.password && <div>{errors.password}</div> }

                <label htmlFor="password_double">Password repeat</label>
                <Field
                    name='password_double'
                    type='password_double'
                    placeholder='Придумайте пароль'
                />
                { errors.password_double && touched.password_double && <div>{errors.password_double}</div> }

                <button type="submit">Enter</button>
            </Form>
        )}
    </Formik>
)

export { RegistrationModal }