import React from "react";

import Dane3 from "../img/dane3.jpeg";

export const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img className="img-fluid" src={Dane3} alt="dane pic" />
    </div>
  );
};

export default Home;
