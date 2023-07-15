import {BrowserRouter,useParams,Link,useNavigate} from 'react-router-dom'
import {Routes,Route} from 'react-router'
import styles from './style/style.module.css'
import People from './components/People'
import Search from './components/search'
import PeopleDetail from './components/PeopleDetail'

export default function App() {

  return (
    <div className={styles.body}>
    <BrowserRouter>
      <nav className={styles.nav}>
      <Link className={styles.homeNav} to='/home'>Home</Link>
      <Link className={styles.link} to='/Search'>Search 🔎</Link>
        <input placeholder='Search...'/>
      <Link className={styles.link} to='/people'>People</Link>
      <Link className={styles.link} to='/people'>Films</Link>
      <Link className={styles.link} to='/about'>Starship</Link>
      <Link className={styles.link} to='/about'>Vehicles</Link>
      <Link className={styles.link} to='/about'>Species</Link>
      <Link className={styles.link} to='/product/:namaProduct'>Planet</Link>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/people/1' element={<PeopleDetail/>}/>
        <Route path='/product/:namaProduct' element={<ProductCard/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

function Home(){
  const navigate = useNavigate()
  const handleClickAbout = () => {
    alert('akan pindah halaman ke People')
    navigate('/people')
  }
  return(
    <>
    <h1>Homepage</h1>
    <a onClick={handleClickAbout}>pindah ke People</a>
    </>
  )
}

function About(){
  return <h1>About Page</h1>
}
function ProductCard(){
  const {namaProduct} = useParams();

  return <sub>Produc card dengan nama: {namaProduct}</sub>
}