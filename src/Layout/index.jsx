import * as React from "react";
import {
  Container,
  Box,
  CssBaseline,
  Typography,
  Toolbar,
  AppBar,
} from "@mui/material";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
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
    </React.Fragment>
  );
}