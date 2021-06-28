import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <p className="App-header mt-5">
      <h1>Oops No encontramos lo que buscabas</h1>
      <h3 className="p-pb-3">
        <Link to="/">Regresar al menú principal</Link>
      </h3>
    </p>
  );
};

export default Error;
