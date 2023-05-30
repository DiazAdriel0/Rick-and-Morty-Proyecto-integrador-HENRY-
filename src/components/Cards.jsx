import Card from './Card';

export default function Cards(props) {
   let { characters } = props

   function closeHandler() {
      return window.alert('Emulamos que se cierra la card')
   }

   return (
      <div>
         {characters.map(character => (<Card key={character.id}
            character={character}
            onClose={closeHandler}/>
         ))}
      </div>
   )
}
