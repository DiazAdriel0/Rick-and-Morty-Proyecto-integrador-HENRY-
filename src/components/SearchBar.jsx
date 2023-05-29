export default function SearchBar(props) {
   let {onSearch} = props
   return (
      <div>
         {
            <div>
               <input type='search' />
               <button onClick={onSearch}>Agregar</button>
            </div>
         }
      </div>
   );
}
