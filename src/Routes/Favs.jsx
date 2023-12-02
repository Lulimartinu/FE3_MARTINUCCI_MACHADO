import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  console.log("Estado en Favs:", state);
  // Usa el estado del contexto para obtener la lista de dentistas favoritos
  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  console.log(localStorage.getItem("favs"))

  // Mostrar un mensaje si no hay dentistas favoritos
  if (favs.length === 0) {
    return <h2>No tienes dentistas favoritos !</h2>;
  }

  return (
    <>
      <h2>Dentistas Favoritos :</h2>
      <div className={"card-grid"}>
        {/* Renderizar la lista de dentistas favoritos */}
        {favs.map((dentist) => (
          <div key={dentist.id}>
            <Card dentist={dentist} />
            <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favs;
