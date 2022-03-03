import React, { useEffect } from "react";

import MapContent from "../components/map/map";

const Home = () => {
  const handleOnClick = () => {
    window.location.assign("/about");
  };

  return (
    <div>
      <h2>Home page</h2>
      <MapContent />
    </div>
  );
};

export default Home;
