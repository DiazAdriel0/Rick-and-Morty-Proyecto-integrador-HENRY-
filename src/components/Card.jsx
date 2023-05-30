export default function Card(props) {
   const {character,onClose} = props
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{character.name}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <h2>{character.origin.name}</h2>
         <img src={character.image} alt='imagen del personaje' />
      </div>
   );
}
