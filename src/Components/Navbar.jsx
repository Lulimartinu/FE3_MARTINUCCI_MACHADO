import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context"; 

const Navbar = () => {
  const { theme, changeTheme } = useContext(ContextGlobal).contextValue;

  const handleThemeChange = () => {
    changeTheme();
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to="/home"> Home </Link>

      <Link to="/contacto"> Contacto </Link>

      <Link to="/favs"> Favs </Link>

      <button onClick={handleThemeChange}>Change theme</button>
    </nav>
  );
};

export default Navbar;

