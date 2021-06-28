import React, { useState } from "react";
import { srcApi } from "../config/variables";

const CreateClient = () => {
  const [clients, setClients] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
  });
  const [validated, setValidated] = useState(true);
  const [component, setComponent] = useState("");

  //

  //guardar los datos
  const getDataForm = (e) => {
    setClients({
      ...clients,
      [e.target.name]: e.target.value,
    });
  };

  // Envio de data
  const handleClick = () => {
    //console.log("vamos a vender y a validar");
    //validaciones de los campos
    if (
      clients.firstname.trim() === "" ||
      clients.lastname.trim() === "" ||
      clients.email.trim() === "" ||
      clients.phone.trim() === "" ||
      clients.city.trim() === ""
    ) {
      setValidated(false);
      return;
    }
    setValidated(true);
    const url = `${srcApi}/clients`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(clients),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message) {
          setClients({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            city: "",
          });
          setComponent(
            <div className="alert alert-success" role="alert">
              <h4>¡Cliente Creado correctamente!</h4>
            </div>
          );
          setTimeout(() => {
            setComponent("");
          }, 2000);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="alert alert-dark mt-3" role="alert">
      <div className="container">
        <div className="alert alert-info" role="alert">
          <h4>Digite cada uno de los campos para un registro exitoso:</h4>
        </div>
        {component}
        {validated ? (
          ""
        ) : (
          <div className="alert alert-danger" role="alert">
            <h4> Los cinco campos son obligatorios</h4>
          </div>
        )}

        <form>
          <div className="row">
            <div className="form-group col-4 mt-2">
              <label htmlFor="firstname">Nombre:</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                id="firstname"
                value={clients.firstname}
                onChange={getDataForm}
              />
            </div>
            <div className="form-group col-4 mt-2">
              <label htmlFor="lastname">Apellido:</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                id="lastname"
                value={clients.lastname}
                onChange={getDataForm}
              />
            </div>
            <div className="form-group col-4 mt-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={clients.email}
                onChange={getDataForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-4 mt-2">
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                value={clients.phone}
                onChange={getDataForm}
              />
            </div>

            <div className="form-group col-4 mt-2">
              <label htmlFor="city">Ciudad:</label>
              <input
                type="text"
                className="form-control"
                name="city"
                id="city"
                value={clients.city}
                onChange={getDataForm}
              />
            </div>
          </div>
        </form>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={() => handleClick()}
        >
          Crear Cliente
        </button>
      </div>
    </div>
  );
};

export default CreateClient;
