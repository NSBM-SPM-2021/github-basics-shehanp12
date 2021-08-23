import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { useAppContext } from "../libs/contextLib";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
const Register = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();

  const renderConfirmationForm = () => {
    return (
      <Container maxWidth="sm">
        <Grid item md={6} xs={12}>
          <TextField
            fullWidth
            helperText="The Name of the book"
            label="Book Name"
            name="bookName"
            onChange={handleChange}
            required
            value={values.bookName}
            variant="outlined"
          />
        </Grid>
      </Container>
    );
  };

  const renderForm = () => {
    return (
      <Container maxWidth="sm">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),

            password: Yup.string().max(255).required("password is required"),
            confirmPassword: Yup.string()
              .max(255)
              .required("confirm password is required"),
          })}
          onSubmit={async (values) => {
            try {
              console.log(values.email);
              await Auth.confirmSignUp(values.email, values.confirmationCode);
              await Auth.signIn(values.email, values.password);

              userHasAuthenticated(true);
            } catch (e) {
              console.log(e);

            }
            navigate("/app/dashboard", { replace: true });
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 3 }}>
                <Typography color="textPrimary" variant="h2">
                  Create new Admin User
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Use your email to create new account
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  touched.confirmPassword && errors.confirmPassword
                )}
                fullWidth
                helperText={touched.confirmPassword && errors.confirmPassword}
                label="confirmPassword"
                margin="normal"
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.confirmPassword}
                variant="outlined"
              />
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up now
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body1">
                Have an account?{" "}
                <Link component={RouterLink} to="/login" variant="h6">
                  Sign in
                </Link>
              </Typography>
            </form>
          )}
        </Formik>
      </Container>
    );
  };

  return (
    <>
      <Helmet>
        <title>Register | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        {newUser === null ? renderForm() : renderConfirmationForm()}
      </Box>
    </>
  );
};

export default Register;
