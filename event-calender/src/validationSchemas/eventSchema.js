import * as yup from "yup";
export const eventSchema = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Enter Your Username").min(2),
  });
};
