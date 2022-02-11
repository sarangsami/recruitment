import * as React from "react";
import {
  Container,
  Box,
  CssBaseline,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1013EF",
    },
    secondary:{
      main:"#EF1083"
    },
    error:{
      main:"#FA1B1B"
    },
    success:{
      main:"#10EF7C"
    }
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div">
            Project
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