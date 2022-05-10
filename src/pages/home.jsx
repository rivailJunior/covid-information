import React from "react";

import { Card, Container } from "@mui/material";

import MapContent from "../components/map/map";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <h2>Home page</h2>
      <Card>
        <MapContent />
      </Card>
    </Container>
  );
};
export default Home;
