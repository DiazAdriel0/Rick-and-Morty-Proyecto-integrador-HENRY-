import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFav = (character) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
           const promise = await axios.post(endpoint, character)
           const data = promise.data
           if(!data) throw new Error("No se encontró data en la respuesta del servidor")
            return dispatch({
                type: ADD_FAV,
                payload: data,
            })
        };
    } catch (error) {
        console.log(error);
    }
};

export const removeFav = (id) => {
    try {
        const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
        return async (dispatch) => {
            const promise = await axios.delete(endpoint)
            const data = promise.data
            if(!data) throw new Error("No se encontró data en la respuesta del servidor")
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            });
        }  
    } catch (error) {
        console.log(error);
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}