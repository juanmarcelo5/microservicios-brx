const User = require("../models/User")

const login = async (req,res) =>{
  const {correo,password} =  req.body
  if(!correo || !password) 
    return res.status(402).json({msg:`El correo o password esta sin dato`})

  //todo
  //comparar con los datos de la BD
  try {
    console.log(req.body);
    const user = await User.findOne({name:'juan'})
    res.status(200).json({
      msg:'Todos los usuarios',
      user
    })

  } catch (error) {
    return res.status(500).json({
      msg:'Ocurrio un error en el servidor'
    })
  }    
}


module.exports={
  login
}