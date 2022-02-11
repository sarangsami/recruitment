import * as React from "react";
import {
  Container,
  Box,
  CssBaseline,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1013EF",
    },
    secondary: {
      main: "#EF1083",
    },
    error: {
      main: "#FA1B1B",
    },
    success: {
      main: "#10EF7C",
    },
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="inherit" elevation={1}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: (globalTheme) => globalTheme.palette.success.main,
              mr:10
            }}
            component="div"
          >
            Project
          </Typography>
          <Typography sx={{fontWeight:"bold"}}>
          Recruitement Pipeline
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>{children}</Box>
      </Container>
    </ThemeProvider>
  );
}
