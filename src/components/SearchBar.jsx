export default function SearchBar(props) {
   let { onSearch } = props
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
