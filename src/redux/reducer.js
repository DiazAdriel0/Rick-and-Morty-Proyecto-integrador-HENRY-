import {ADD_FAV, REMOVE_FAV} from "./actions"

const initialState = {
    myFavorites: []
}

export const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV: 
            return {
                ...state,
                myFavorites: [...state.myFavorites,payload]
            }
        case REMOVE_FAV:
            const filtered = state.myFavorites.filter(character => character.id !== Number(payload))
            return {
                ...state,
                myFavorites: filtered
            }
        default:
            return state
    }
}