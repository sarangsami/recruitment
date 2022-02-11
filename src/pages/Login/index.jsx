import { Box, Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

import CustomInput from "components/CustomInput";
import CustomRoundedButton from "components/CustomRoundedButton";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup
    .string("Enter your password")
    .min(8, "minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "test_user",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate("/candidates")
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
        <Typography component="h2" variant="body1" sx={{ color: "#808189" }}>
          Fill in required fields to sign in
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 5 }}
        >
          <CustomInput
            required
            fullWidth
            id="username"
            title="Username"
            placeholder="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <Box mt={2}>
            <CustomInput
              required
              fullWidth
              name="password"
              placeholder="password"
              title="Password"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>

          <CustomRoundedButton
            type="submit"
            fullWidth
            color="secondary"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </CustomRoundedButton>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
