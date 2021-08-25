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
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });

      setNewUser(newUser);
    } catch (e) {
      console.log(e);
    }
  };

  const handleConfirmationSubmit = async (event) => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      userHasAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  const renderConfirmationForm = () => {
    return (
      <Container maxWidth="sm">
        <Grid item md={6} xs={12}>
          <form onSubmit={handleConfirmationSubmit}>
            <Paper>Confirmation Code</Paper>
            <TextField
              fullWidth
              helperText="The Name of the book"
              label="Book Name"
              name="bookName"
              onChange={handleFieldChange}
              required
              value={fields.confirmationCode}
              variant="outlined"
            />
            <Paper>Please check your email for the code</Paper>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                // disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Verify
              </Button>
            </Box>
          </form>
        </Grid>
      </Container>
    );
  };

  const renderForm = () => {
    return (
      <Container maxWidth="sm">
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
            onChange={handleFieldChange}
            type="email"
            value={fields.email}
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
            onChange={handleFieldChange}
            type="password"
            value={fields.password}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            fullWidth
            helperText={touched.confirmPassword && errors.confirmPassword}
            label="confirmPassword"
            margin="normal"
            name="confirmPassword"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={fields.confirmPassword}
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
          {/* <Typography color="textSecondary" variant="body1">
                Have an account?{" "}
                <Link component={RouterLink} to="/login" variant="h6">
                  Sign in
                </Link>
              </Typography> */}
        </form>
        )
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
