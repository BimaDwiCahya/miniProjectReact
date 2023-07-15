
import { useState, useEffect} from "react"

export default function PeopleDetail(){
    const [data, setData] = useState(null)
    useEffect(()=>{
                fetch(`https://swapi.dev/api/people/1`)
                .then((response)=> response.json())
                .then((json) => setData(json))
                .catch(e => alert(`gagal mengambil API ${e.message}`))
               }, [])
    return( 
        <div>
            <h1>data dari api people/1</h1>
            <div>  {JSON.stringify(data)} </div>
        </div>
    )
}