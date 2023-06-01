import style from './search-bar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   //Agregué idHijo en vez de "" en parametro de useState
   const [id,setId] = useState("")

   function handleChange(event){
      setId(`${event.target.value}`)
   }

   function clickHandler(){
      onSearch(id)
   }
   
   return (
      <div className={style.container}>
         <input type='search' value={id} onChange={handleChange}></input>
         <button onClick={clickHandler}>Agregar</button>
      </div>
   );
}
