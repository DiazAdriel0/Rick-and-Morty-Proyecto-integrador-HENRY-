import axios from "axios"
import {useParams} from 'react-router-dom'
import {useState , useEffect} from "react"
import React from "react"

export default function Detail(){
    const {id} = useParams()
    const [character,setCharacter] = useState([])
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    /* const conditionalRender = () => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter([data]);
                return (
                    <div>
                        <h1>{character.name}</h1>
                        <h3>STATUS | {character.status}</h3>
                        <h3>SPECIES | {character.species}</h3>
                        <h3>GENDER | {character.gender}</h3>
                        <h3>ORIGIN | {""}</h3>
                        <img src={character.image} alt={character.name}></img>
                    </div>
                )
            } else {
                window.alert('No hay personajes con ese ID');
                return null
            }
            });
        return setCharacter({});
    } */
    /* useEffect(conditionalRender, []) */
    return (
        <div>
            <h1>{character.name}</h1>
            <h3>STATUS | {character.status}</h3>
            <h3>SPECIES | {character.species}</h3>
            <h3>GENDER | {character.gender}</h3>
            <h3>ORIGIN | {character.origin?.name}</h3>{/* Si o si va el operador condicional ? para que espere una respuesta y despues renderice */}
            <h3>LOCATION | {character.location?.name}</h3>
            <img src={character.image} alt={character.name}></img>

            {/* <conditionalRender /> */}
        </div>
    )
}