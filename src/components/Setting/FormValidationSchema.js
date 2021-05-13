import * as yup from 'yup';

const fieldRequired = "Can't be empty";

const yupUser = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-z ,.'-]+$/i, `Name can only contains alphabates`),
  email: yup
    .string()
    .email('Email is not valid')
    .trim()
    .required(fieldRequired),
  username: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-zA-Z0-9]+$/i, `Username can only contains alphanumerics`),
  location: yup
    .string()
    .trim()
    .required(fieldRequired)
    .matches(/^[a-zA-Z0-9 ,]+$/i, `Invalid Character`),
  bio: yup.string().trim().required(fieldRequired),
});

export { yupUser };
