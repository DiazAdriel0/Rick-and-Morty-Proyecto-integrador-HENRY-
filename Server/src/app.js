const express = require("express")
const app = express()
const mainRouter = require("./routes/index.js")

/* const prefixMiddleware = (req, res, next) => {
    req.url = "/rickandmorty" + req.url//`/rickandmorty${req.url}`
    next()
} */

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
/* app.use(prefixMiddleware) */
app.use(express.json())
app.use('/rickandmorty', mainRouter)

module.exports = app