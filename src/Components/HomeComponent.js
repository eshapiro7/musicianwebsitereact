import React from "react";

import DJ1 from "../img/dj1.jpg";
import Dane1 from "../img/dane1.jpg";

export const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <img className="home-pic" src={DJ1} alt="Dane DJ Picture" />
      </div>

      <div>
        <img className="home-pic" src={Dane1} alt="Dane Drum Picture" />
      </div>
    </div>
  );
};

export default Home;
