import Card from '../card/Card';
import style from './cards.module.css'

export default function Cards(props) {
   let { characters, onClose } = props
   return (
      <div className={style.container}>
         {characters.map(character => (<Card key={character.id}
            character={character}
            onClose={onClose}/>
         ))}
      </div>
   )
}
