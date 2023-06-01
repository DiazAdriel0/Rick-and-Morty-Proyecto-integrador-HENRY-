import style from './card.module.css'

export default function Card(props) {
   const {character,onClose} = props
   function handleClick (event){
      onClose(event.target.value)
   }
   return (
      <div className={style.container}>
         <button onClick={handleClick} value={character.id}>X</button>
         <h2>{character.name}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <img className={style.img} src={character.image} alt='imagen del personaje' />
      </div>
   );
}
