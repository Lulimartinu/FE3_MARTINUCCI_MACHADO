import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

  const { FAVS } = useContext(ContextGlobal).contextValue;

  return (
    <>
      <h1>Dentists Favs</h1>

      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
      <div className="card-grid">
        {FAVS.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </>
  );
};

export default Favs;
