import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {

   function searchHandler(characterID){
      return /* window.alert(characterID) */ window.alert("Acá debería devolver el ID que estoy buscando")
   }
   
   return (
      <div className='App'>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
