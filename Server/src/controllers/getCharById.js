const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req,res) => {
    try {
        const {id} = req.params
        const {data} = await axios(`${URL}${id}`)
        if(!data) throw new Error("No reconoce data de la respuesta de la api")
        const {status,name,species,origin,image,gender,location} = data
        if(data.id){
            const character = {
                id: data.id,
                status,
                name,
                species,
                origin,
                image,
                gender,
                location,
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