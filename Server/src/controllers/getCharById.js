/* const axios = require('axios')

function getCharById (res,id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(({name,gender,species,origin,image,status}) => {
        const character = {
            id,
            name,
            gender,
            species,
            origin: origin?.name,
            image,
            status,
        }
        return res
            .writeHead(200, {"Content-Type": "application/json"})
            .end(JSON.stringify(character))
    })
    .catch(error => {
        return res
            .writeHead(500, {"Content-Type": "text/plain"})
            .end(error.message)
    })
}

module.exports = getCharById */

const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

/* const getCharById = (req,res) => {
    const {id} = req.params
    axios(`${URL}${id}`)
    .then(({data}) => {
        const {id,status,name,species,origin,image,gender} = data
        if(data.id){
            const character = {
                id,
                status,
                name,
                species,
                origin,
                image,
                gender,
            }
            res.status(200).json(character)
        }else{
            res.status(404).send("Not found")
        }
    },
    (error) => {
        res.status(500).send(error.message)
        // res.status(500).json({message: error.message})
    })

} */

const getCharById = async (req,res) => {
    try {
        const {id} = req.params
        const {data} = await axios(`${URL}${id}`)
        if(!data) throw new Error("No reconoce data de la respuesta de la api")
        const {status,name,species,origin,image,gender} = data
        if(data.id){
            const character = {
                id: data.id,
                status,
                name,
                species,
                origin,
                image,
                gender,
            }
            res.status(200).json(character)
        }else{
            throw new Error("Not found")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = getCharById