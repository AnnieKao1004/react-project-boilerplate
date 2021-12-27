import React from "react";
import ReactDOM from "react-dom";
import imgSrc from "./img/doge.jpeg";
import FirmwareSvg from "./img/firmware.svg";

import "./index.scss";

const container = document.getElementById("react-dom-container");

const App = () => {
  return (
    <>
      <h1>Congrats</h1>
      <h3>React app</h3>
      <FirmwareSvg />
      <div>
        <img src={imgSrc} height="auto" width="300px" />
      </div>
    </>
  );
};

ReactDOM.render(<App />, container);
