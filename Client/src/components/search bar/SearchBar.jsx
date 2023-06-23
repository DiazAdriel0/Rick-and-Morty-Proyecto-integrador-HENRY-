import style from './search-bar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id,setId] = useState("")

   function handleChange(event){
      event.preventDefault();
      setId(`${event.target.value}`)      
   }

   function clickHandler(){
      onSearch(id)
      setId("")
   }
   
   return (
      <div className={style.container}>
         <input type='search' value={id} onChange={handleChange}></input>
         <button onClick={clickHandler}>Add</button>
      </div>
   );
}
