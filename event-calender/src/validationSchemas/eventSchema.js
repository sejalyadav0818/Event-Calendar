import * as yup from "yup";

export const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export const validationSchema = yup.object().shape({
  eventname: yup.string().required("Enter Your eventname").min(2),
  ffrom: yup
    .date()
    .required("Enter Your start Day")
    .min(new Date(), "Date should be after Current Date"),
  to: yup
    .date()
    .required("Enter you end Date")
    .min(
      yup.ref("ffrom"),
      "Your end Date should be  grater then your from date"
    ),
  participants: yup.string().required("Enter participants Name"),
});
