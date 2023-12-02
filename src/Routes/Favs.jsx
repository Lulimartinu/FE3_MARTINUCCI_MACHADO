import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
 

  // Obtener favoritos desde localStorage
  const favs = JSON.parse(localStorage.getItem("favs")) || [];


  // Mostrar un mensaje si no hay dentistas favoritos
  if (favs.length === 0) {
    return (
      
        <h2 >No tienes dentistas favoritos ! </h2>
    );
  }
  

  return (
    <>
      <h2>Dentistas Favoritos :</h2>
      <div className={'card-grid'}>
        {/* Mapear la lista de dentistas favoritos y renderizar una Card por cada uno */}
        {favs.map((dentist) => (
          <div key={dentist.id}>
            <Card dentist={dentist} />
            <Link to={`/Detail/${dentist.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </>
  );
};


export default Favs;