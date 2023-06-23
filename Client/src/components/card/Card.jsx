import { Link } from 'react-router-dom';
import style from './card.module.css'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {

   const { character, onClose } = props
   const { addFav, removeFav, favorites } = props
   const [isFav, setIsFav] = useState(false)
   const [closeBtn, setCloseBtn] = useState(true);

   //Para que no se renderice el botón X en /favorites 
   useEffect(() => {
      if (!onClose) {
         setCloseBtn(false)
      }
   }, [])

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === props.character.id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   function handleFavorite(data) {
      if (isFav) {
         removeFav(data)
         setIsFav(false);
      } else {
         addFav(data)
         setIsFav(true)
      }
   }

   function handleClick(event) {
      onClose(event.target.value)
      //Cuando cierro una tarjeta, el personaje se elimine de favoritos
      removeFav(character.id)
      setIsFav(false)
   }

   return (
      <div className={style.container}>
         <div className={style.divButtons}>
            {
               isFav ? (
                  <button className={style.buttonFav} onClick={() => handleFavorite(character.id)}>❤️</button>
               ) : (
                  <button className={style.buttonFav} onClick={() => handleFavorite(character)}>🤍</button>
               )
            }
            {closeBtn && (<button onClick={handleClick} value={character.id}>X</button>)}
         </div>

         <Link to={`/detail/${character.id}`}>
            <img className={style.img} src={character.image} alt='imagen del personaje' />
         </Link>
         <h2>{character.name}</h2>
         <h2>{character.gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
}

const mapStateToProps = (state) => {
   return {
      favorites: state.allCharacters,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);