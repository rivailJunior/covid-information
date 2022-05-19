import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Pages from "./routes-pages";

import HeaderAppBar from "../components/header/header";

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
