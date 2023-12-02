import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
/*export default function Detail() {*/
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
/*    const { id }= useParams()

    const [dentist, setDentist] = useState()
    const [err, setErr] = useState()



    async function getdentist() {
        setLoading(true)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const data = await response.json()
        setDentist(data)
        setLoading(false)
    }


    useEffect(() => {
        getdentist()
    }, [])
*/
   /* return (
       /* aqui deberan renderizar la informacion en detalle de un user en especifico */
       /* <div className="specificDentist">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1> {dentist.id}</h1>
                    <article>
                   {  /* Deberan mostrar el name - email - phone - website por cada user en especifico */ 
                      /*  <h2>{dentist.name}</h2>
                        <p>{dentist.username}</p>
                        <p>id: {dentist.id}</p>
                    </article>
                </>
            )}
        </div>
    )
}*/



 const Detail = () => { 
    const { state } = useContext(ContextGlobal);
    
    const { id } = useParams()
    const [dentist, setDentist] = useState();
    const [error, setError] = useState();
  
    useEffect(() => {
      const fetchDentist = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
          if (!response.ok) {
            throw new Error('Error en los detalles del dentista');
          }
          const data = await response.json();
          setDentist(dentist);
        } catch (error) {
          setError(error.message);
        }
  
        
      };
  
      fetchDentist();
    }, [id]);
  
    return (
      <div>
        {error && <p>Error al obtener los detalles del dentista: {error}</p>}
      {dentist && ( 
          <>
           
            <form><h2>Detalle del dentista {id}</h2>
            <p>Nombre: {dentist.name}</p>
            <p>Email: {dentist.email}</p>
          
    
            </form>
            
          </>
        )};
      </div>
    );
  };
  
  export default Detail;