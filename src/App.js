import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx'
import {useState} from 'react'
import axios from 'axios';
//import logoRM from './assets/logo.png'

function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
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
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      let filteredCharacters = characters.filter(character => character.id !== parseInt(id))
      console.log(filteredCharacters);
      setCharacters([...filteredCharacters])
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         {/* <img src={logoRM} className="title" alt="logo" /> */}
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
