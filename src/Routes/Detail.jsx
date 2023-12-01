import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
export default function Detail() {
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    const params = useParams()
    const [dentist, setDentist] = useState()
    const [loading, setLoading] = useState(true)



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

    return (
       /* aqui deberan renderizar la informacion en detalle de un user en especifico */
        <div className="specificDentist">
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1> {dentist.id}</h1>
                    <article>
                   {  /* Deberan mostrar el name - email - phone - website por cada user en especifico */} 
                        <h2>{dentist.name}</h2>
                        <p>{dentist.username}</p>
                        <p>id: {dentist.id}</p>
                    </article>
                </>
            )}
        </div>
    )
}
