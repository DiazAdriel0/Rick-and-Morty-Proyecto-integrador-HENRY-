const { users } = require("./../utils/users")

const loginController = (req,res) => {
    const {email,password} = req.query
    const user = users.find(user => user.email == email && user.password == password)
    if(user){
        res.status(200).json({access: true})
    }else{
        res.status(200).json({access: false})
    }
    //const access = user ? true : false //y despues la respuesta es .json({access})
}

module.exports = {loginController};