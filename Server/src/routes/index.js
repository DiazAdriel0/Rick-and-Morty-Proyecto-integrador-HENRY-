const getCharById = require("./../controllers/getCharById")
const {postFav, deleteFav} = require("./../controllers/handleFavorites")
const {loginController} = require("./../controllers/login")
const { Router } = require("express")

const mainRouter = Router()

mainRouter.get("/character/:id", getCharById);

mainRouter.get("/login", loginController);

mainRouter.post("/fav", postFav);

mainRouter.delete("/fav/:id", deleteFav)

module.exports = mainRouter