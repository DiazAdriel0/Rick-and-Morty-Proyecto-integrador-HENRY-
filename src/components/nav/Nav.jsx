import SearchBar from "../search bar/SearchBar";
import style from "./nav.module.css"

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
        </div>
    )
}