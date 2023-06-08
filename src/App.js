import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { Routes, Route} from 'react-router-dom'
import About from './components/about/About';
import Detail from './components/Detail/Detail'
import Error from './components/error/Error'
import Form from './components/form/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/favorites/Favorites';
//import login from './utils/validate/login';
//import logoRM from './assets/logo.png'

function App() {

   const location = useLocation()

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate()
   const [access,setAccess] = useState(false)
   const EMAIL = "asdasd@asd.com"
   const PASSWORD = "asdasd1"

   function login(userData){
      if(userData.email === EMAIL && userData.password === PASSWORD){
          setAccess(true)
          navigate("/home")
      }else{
         alert("Usuario o contraseña incorrectos")
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access])

   function onSearch(id) {
      if(id<827){
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            let repeated = false
            for (let i = 0; i < characters.length; i++) {
               if(characters[i].id === data.id){
                  repeated = true
               }
            }
            if (data.name && !repeated) {
               setCharacters((oldChars) => [...oldChars, data]);
            }else if(repeated){
               window.alert('No se pueden agregar personajes repetidos')
            }
         });
      }else {
         window.alert('¡No hay personajes con este ID!');
      }
   }

   function onClose(id){
      let filteredCharacters = characters.filter(character => character.id !== parseInt(id))
      setCharacters(filteredCharacters)
   }

   return (
      <div className='App'>
         {location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='*' element={<Error />}></Route>
         </Routes>
         {/* <img src={logoRM} className="title" alt="logo" /> */}
         
      </div>
   );
}

export default App;