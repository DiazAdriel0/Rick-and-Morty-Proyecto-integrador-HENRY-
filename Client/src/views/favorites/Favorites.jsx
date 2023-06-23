import { connect, useDispatch, useSelector } from "react-redux";
import Cards from "./../../components/cards/Cards";
import { filterCards, orderCards } from "../../redux/actions"
import { useState,useEffect } from "react";

function Favorites(props){

    const[aux,setAux] = useState(false)
    
    const {myFavorites} = props
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterCards(""))
    },[])// Esto es para que cada vez que entro a la ruta /favorites se muestren todos los personajes favoritos

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option disabled selected value="">Order</option>
                <option value="A">Ascending</option>
                <option value="D">Descending</option>
            </select>
            <select onChange={handleFilter}>
                <option disabled selected value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="">All</option>
            </select>
            <Cards characters={myFavorites}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);