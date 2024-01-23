import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Formik, useFormik } from "formik";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signinEmailSchema } from "../../Schemas/Schemas";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../../images/login.png";

export default function LogIn() {
  const [showAccountNumber, setShowAccountNumber] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowAccountNumber = () =>
    setShowAccountNumber((show) => !show);

  const handleMouseDownAccountNumber = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const initialValues = {
    email: "",
    password: "",
    // mobile: "",
  };
  // const [isFormValid, setIsFormValid] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "60vw",
          height: "60vh",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            // height: "100vh",
            margin: " 0px 50px",
          }}
        >
          {/* code for thelock symbol */}
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar> */}

          <Typography component="h1" variant="h6">
            EKYC ADMIN
          </Typography>
          <Typography component="h6" variant="h6">
            Login
          </Typography>

          <Formik
            validationSchema={signinEmailSchema}
            initialValues={initialValues}
            onSubmit={(values: any) => {
              console.log("values", values);
              navigate("/layout");
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => {
              // const isEmailFilled = values.email.trim()! == "";
              // const isPasswordFilled = values.password.trim()! == "";
              // const isFormValid = isEmailFilled && isPasswordFilled;
              console.log("errors", errors);
              console.log("values", values);
              return (
                <>
                  <form noValidate onSubmit={handleSubmit}>
                    <div>
                      <TextField
                        fullWidth
                        sx={{ margin: "5px 0px" }}
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{
                          maxLength: 50,
                        }}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email?.toString()}
                      />
                      <TextField
                        sx={{ margin: "5px 0px" }}
                        fullWidth
                        autoComplete="off"
                        name="password"
                        id="password"
                        type={showAccountNumber ? "text" : "password"}
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={
                          touched.password && errors.password?.toString()
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowAccountNumber}
                                onMouseDown={handleMouseDownAccountNumber}
                                edge="end"
                              >
                                {showAccountNumber ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />

                      {/* <TextField
                    sx={{ width: "45%", margin: "20px 0px" }}
                    name="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputProps={{
                      maxLength: 10,
                      pattern: "[0-9]*",
                      inputMode: "numeric",
                    }}
                    fullWidth
                    placeholder="Enter mobile number"
                    error={touched.mobile && Boolean(errors.mobile)}
                    helperText={touched.mobile && errors.mobile?.toString()}
                    onKeyPress={(event) => {
                      const keyCode = event.keyCode || event.which;
                      const keyValue = String.fromCharCode(keyCode);
                      const isValidKey = /^\d+$/.test(keyValue);

                      if (!isValidKey) {
                        event.preventDefault();
                      }
                    }}
                  /> */}

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, margin: "15px 0px" }}
                        disabled={
                          values.email && values.password && !errors.email
                            ? false
                            : true
                        }
                      >
                        LogIn
                      </Button>
                      <Typography variant="subtitle1" color="blue">
                        Forgot Password?
                      </Typography>
                    </div>
                  </form>
                </>
              );
            }}
          </Formik>
        </div>
        <div style={{ width: "50%", height: "100%" }}>
          <img src={image} alt="login" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}
