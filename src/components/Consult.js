import React, { useEffect, useState } from "react";
import { srcApi } from "../config/variables";

const Consult = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    console.log("APIIIIIIIII");
    const url = `${srcApi}/clients`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div class="alert alert-dark mt-3" role="alert">
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <div className="card p-2 col-4">
              <div className="card-body">
                <h5 className="card-title">
                  {user.firstname} {user.lastname}
                </h5>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.phone}</p>
                <p className="card-text">{user.city}</p>
              </div>
              <button type="button" class="btn btn-warning">
                {" "}
                Editar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consult;
