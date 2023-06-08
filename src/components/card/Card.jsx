import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import style from './card.module.css'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   //const {id} = useParams() y despes en Link le pasaría solo id

   const {character,onClose} = props
   const {addFav,removeFav, favorites} = props
   const [isFav, setIsFav] = useState(false)
   const [closeBtn, setCloseBtn] = useState(true);

   useEffect(() => {
      if(!onClose){
         setCloseBtn(false)
      }
   },[])//Para que no se renderice el botón X en /favorites 

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === props.character.id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   function handleFavorite(data) {
      if(isFav){
         removeFav(data)
         setIsFav(false);
      }else{
         addFav(data)
         setIsFav(true)
      }
   }

   function handleClick (event){
      onClose(event.target.value)
      //DESDE ACÁ
      removeFav(character.id)
      setIsFav(false)
      //HASTA ACÁ es opcional, es para que cuando cierro una tarjeta, el personaje se elimine de favoritos
   }
   
   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={() => handleFavorite(character.id)}>❤️</button>
            ) : (
               <button onClick={() => handleFavorite(character)}>🤍</button>
            )
         }
         {closeBtn && (<button onClick={handleClick} value={character.id}>X</button>)}
         <h2>{character.name}</h2>
         <h2>{character.status}</h2>
         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>
         <Link to={`/detail/${character.id}`}>
            <img className={style.img} src={character.image} alt='imagen del personaje' />
         </Link>
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