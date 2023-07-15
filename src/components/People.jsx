import styles from './../style/style.module.css'
import {useEffect, useState} from 'react';
import PeopleDetail from './PeopleDetail';
import {BrowserRouter,useParams,Link,useNavigate} from 'react-router-dom'

export default function People(){
    const [data, setData] = useState(null)

    useEffect(()=>{
                fetch('https://swapi.dev/api/people/')
                .then((response)=> response.json())
                .then((json) => setData(json))
                .catch(e => alert(`gagal mengambil API ${e.message}`))
               }, [])

    return (
        <div>
                <h1 className={styles.header}>People</h1>
            {data?.results.map((post, index) => (
                <div key={index} className={styles.list}>
                    <h2>{post.name}</h2>
                    <p>height: {post.height}</p>
                    <p>mass: {post.mass}</p>
                    <p>color: {post.hair_color}</p>
                    <p>skin color: {post.skin_color}</p>
                    <p>eye color: {post.eye_color}</p>
                    <p>birth year: {post.birth_year}</p>
                    <p>gender: {post.gender}</p>
                    </div>
                    ))}
        </div>
    )
}
