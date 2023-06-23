import axios from "axios"
import {useParams} from 'react-router-dom'
import {useState , useEffect} from "react"
import React from "react"
import style from "./detail.module.css"

export default function Detail(){
    const {id} = useParams()
    const [character,setCharacter] = useState([])
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    return (
        <div className={style.container}>
            <h1>{character.name}</h1>
            <h3>STATUS | {character.status}</h3>
            <h3>SPECIES | {character.species}</h3>
            <h3>GENDER | {character.gender}</h3>
            <h3>ORIGIN | {character.origin?.name}</h3>
            <h3>LOCATION | {character.location?.name}</h3>
            <img src={character.image} alt={character.name}></img>
        </div>
    )
}