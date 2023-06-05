import SearchBar from "../search bar/SearchBar";
import style from "./nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav({onSearch}){
    function searchHandler(id){
        onSearch(id)
    }

    function clickHandler(){
        onSearch(parseInt(Math.random() * 825))
    }
    
    return (
        <div className={style.container}>
            <button onClick={clickHandler}>Add Random</button>
            <SearchBar onSearch={searchHandler}/>
            <NavLink to='/about'>
                <button>About Me</button>
            </NavLink>
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
        </div>
    )
}