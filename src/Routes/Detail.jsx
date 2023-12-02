import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();

  const [dentist, setDentist] = useState();
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  async function getDentist() {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist(data);
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDentist();
  }, [id]);

  return (
    <div>
      {err && <p>Error al obtener los detalles del dentista: {err}</p>}
      {loading && <p>Cargando...</p>}
      {dentist && (
        <article>
          <h2>{dentist.name}</h2>
          <p>{dentist.username}</p>
          <p>id: {dentist.id}</p>
        </article>
      )}
    </div>
  );
};

export default Detail;
