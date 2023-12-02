import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
 

  // Obtener favoritos desde localStorage
  const favorites = JSON.parse(localStorage.getItem("favs")) || [];

  // Aplicar clases de estilo condicional según el tema


  // Mostrar un mensaje si no hay dentistas favoritos
  if (favorites.length === 0) {
    return (
      
        <p >No hay dentistas favoritos </p>
    );
  }
  

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={'card-grid'}>
        {/* Mapear la lista de dentistas favoritos y renderizar una Card por cada uno */}
        {favs.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};


export default Favs;