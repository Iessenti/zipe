import * as Yup from "yup"

const CodeSchema = Yup.object().shape({
    code: Yup.string()
        .matches(/\d{6}/, "Код должен содержать 6 цифр")
        .required("Required")
})

export default CodeSchema;