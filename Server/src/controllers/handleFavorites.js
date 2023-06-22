let myFavorites = [];

const postFav = (req,res) => {
    myFavorites.push(req.body);
    res.status(200).json(myFavorites)
}

const deleteFav = (req,res) => {
    const {id} = req.params
    const favFiltered = myFavorites.filter(character => character.id !== Number(id))
    myFavorites = favFiltered
    res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav,
}