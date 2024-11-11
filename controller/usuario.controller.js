const ModelUser = require("../models/model");





const usuarioCtrol ={};





//create

usuarioCtrol.createUser =  async(req,res) =>{
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
 }
 
 
 //consultar en la bd
 
 usuarioCtrol.getUser = async(req,res) => {
     const respuesta = await ModelUser.find({})
     res.send(respuesta)
 }
 
 
 
 //consulta por ID
 usuarioCtrol.getUniqueUser = async(req,res) => {
     const id = req.params.id;
     const respuesta = await ModelUser.findById({_id:id})
     res.send(respuesta)
 }


 
 //Actualizar registro
 
usuarioCtrol.editUser = async(req,res) =>{
     const body = req.body;
     const id = req.params.id;
     const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);
     res.send(respuesta);
 
 }
 
 //Eliminar un registro 
 usuarioCtrol.deleteUser =  async(req,res) =>{
     const id = req.params.id;
     const respuesta = await ModelUser.deleteOne({_id:id});
     res.send(respuesta);
 
 }

 module.exports = usuarioCtrol;
 