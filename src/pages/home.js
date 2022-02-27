import React from 'react';

const Home = () => {
  const handleOnClick = () => {
    window.location.assign('/about');
  };

  return (
    <div>
      <h2>
        Home page
      </h2>
      <button onClick={handleOnClick}>Click here to load page</button>
    </div>

  );
};

export default Home;
