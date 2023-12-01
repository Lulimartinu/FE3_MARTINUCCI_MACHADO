import React, { useState } from "react";
import { useEffect } from "react";
import doctor from "../images/doctor.jpg";

const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };
  let image = (
    <img
      className="image"
      src={doctor}
      style={{
        maxWidth: "100%",
        maxHeight: "100%",
        width: "auto",
        height: "auto",
      }}
      alt="IMAGEN"
    />
  );
  let [card, setCard] = useState([]);

  useEffect(() => {
    getOdontologo();
  }, []);

  const getOdontologo = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const convert = await data.json();
    console.log(data);
    setCard(convert);
    console.log(setCard);
  };

  return (
    <div >
      <div className="card-grid">
        {card.map((obj) => (
          <li className="card">
            {" "}
            {image} {obj.name} <br /> {obj.username}{" "}
            <button onClick={addFav} className="favButton">
              Add fav
            </button>
          </li>
        ))}

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </div>
    </div>
  );
};

export default Card;
