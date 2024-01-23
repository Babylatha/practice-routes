import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const mobileRegExp = /^[0-9]{10}$/;

export const signinEmailSchema = Yup.object({
  email: Yup.string()
    .required("Email is Required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter Valid Email"),
  password: Yup.string().required("Password is required"),
  // mobile: Yup.string().required("Mobile Number is Required"),
  // .matches(/^[0-9]{10}$/, "Enter a 10-digit mobile number"),
});
