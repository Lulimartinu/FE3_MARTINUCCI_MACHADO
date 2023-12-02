import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Favs from './Favs';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

 const Detail = () => { 
    const { state } = useContext(ContextGlobal);
    const { id }= useParams()

    const [dentist, setDentist] = useState()
    const [err, setErr] = useState()

    async function getdentist() {
        setLoading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const data = await response.json()
        setDentist(Favs)

    }


    useEffect(() => {
        getdentist()
    }, [])
    return (
      <div>
        {err && <p>Error al obtener los detalles del dentista: {err}</p>}
      {dentist && ( 
        
           
           <article>
                   { /*  Deberan mostrar el name - email - phone - website por cada user en especifico */ }
                      <h2>{dentist.name}</h2>
                        <p>{dentist.username}</p>
                        <p>id: {dentist.id}</p>
                    </article>
         
            
          
        )};
      </div>
    );
  };
  
  export default Detail;