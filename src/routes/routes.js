import React from "react";
import { BrowserRouter } from "react-router-dom";

import HeaderAppBar from "../components/header/header";
import { Container, Toolbar, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Pages from "./routes-pages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <HeaderAppBar />
      <Container>
        <Pages />
      </Container>
    </BrowserRouter>
  );
}
