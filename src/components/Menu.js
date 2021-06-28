import React from "react";

const Menu = () => {
  return (
    <ul class="nav App-nav mt-3">
      <li class="nav-item">
        <a class="nav-link" href="/">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/create">
          1.Crear Clientes
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="consult">
          2.Consultar
        </a>
      </li>
    </ul>
  );
};

export default Menu;
