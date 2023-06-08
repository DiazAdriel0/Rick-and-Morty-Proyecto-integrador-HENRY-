import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

export const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV: 
            return {
                ...state,
                myFavorites: [...state.myFavorites,payload],
                allCharacters: [...state.allCharacters,payload],
                /* Revisar este case */
            }
        case REMOVE_FAV:
            const remaining = state.allCharacters.filter(character => character.id !== Number(payload))
            return {
                ...state,
                myFavorites: remaining,
                allCharacters: remaining,
            }
        case FILTER:
            const filtered = state.allCharacters.filter(character => character.gender === payload)
            if(payload === ""){
                return {
                    ...state,
                    myFavorites: state.allCharacters,
                }// Esto es para que cada vez que entro a la ruta /favorites se muestren todos los personajes favoritos
            }else{
                return {
                    ...state,
                    myFavorites: filtered
                }
            }
        case ORDER:
            if (payload === "A"){
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => a.id - b.id)
                }
            }else if (payload === "D"){
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => b.id - a.id)
                }
            }
        /* case CLOSE://Agregado
            const remainingClose = state.allCharacters.filter(character => character.id !== Number(payload))
            return {
                ...state,
                myFavorites: remainingClose,
                allCharacters: remainingClose,
            }//Hasta acá */
        default:
            return {
                ...state
                //myFavorites: state.allCharacters para que por default se muestren todos
            }
    }
}