import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { Routes, Route} from 'react-router-dom'
import About from './views/about/About';
import Detail from './views/Detail/Detail'
import ErrorPage from './views/error/ErrorPage'
import Form from './views/form/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import Favorites from './views/favorites/Favorites';
//import login from './utils/validate/login';
//import logoRM from './assets/logo.png'

function App() {

   const location = useLocation()

   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate()
   const [access,setAccess] = useState(false)
   /* const EMAIL = "asdasd@asd.com"
   const PASSWORD = "asdasd1" */

   /* function login(userData){
      if(userData.email === EMAIL && userData.password === PASSWORD){
          setAccess(true)
          navigate("/home")
      }else{
         alert("Usuario o contraseña incorrectos")
      }
   } */
   /* function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   } */
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const promise = await axios(`${URL}?email=${email}&password=${password}`)
         const access = promise.data.access
         if(!access) throw new Error("Usuario o Contraseña incorrectos")
         setAccess(access);
         access && navigate('/home');
      } catch (error) {
         console.log(error);
      }
      
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access])

   /* function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if(data){
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
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   } */

   async function onSearch(id) {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if(!data) throw new Error("No se recibe data de la peticion al servidor")
         if(data){
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
         }else{
            throw new Error("'¡No hay personajes con este ID!'")
         }
      } catch (error) {
         console.log(error);//Esto tengo que notificarselo al usuario de alguna forma, no por consola
      }
   }

   function onClose(id){
      let filteredCharacters = characters.filter(character => character.id !== Number(id))
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
            <Route path='*' element={<ErrorPage />}></Route>
         </Routes>
         {/* <img src={logoRM} className="title" alt="logo" /> */}
         
      </div>
   );
}

export default App;