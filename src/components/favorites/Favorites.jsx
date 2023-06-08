import { connect } from "react-redux";
import Cards from "../cards/Cards";

function Favorites(props){

    const {myFavorites} = props

    return (
        <div>
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