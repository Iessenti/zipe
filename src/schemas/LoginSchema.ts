import * as Yup from "yup"

const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string()
        .min(8, "Длина пароля должна быть не менее 8 символов")
        .matches(/^.*(?=.*[a-z])(?=.*\d).*$/, "Пароль должен содержать латиницу и как минимум одну цифру")
        .required("Required")
})

export default LoginSchema;