import * as yup from "yup";
const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};
const validationSchema = yup.object().shape({
  email: yup.string().required("Enter Your Email").email("Enter a valid email"),
  password: yup
    .string()
    .required("Enter Your  password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});
export default validationSchema;
