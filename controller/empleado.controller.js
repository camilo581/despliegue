const ModelEmpleado = require("../models/empleado");




const empleadocontrol = {};





//create

empleadocontrol.createEmpleado =  async(req,res) =>{
    const body = req.body;
    const respuesta = await ModelEmpleado.create(body)
    res.send(respuesta)
 }
 
 
 //consultar en la bd
 
 empleadocontrol.getEmpleado= async(req,res) => {
     const respuesta = await ModelEmpleado.find({})
     res.send(respuesta)
 }
 
 
 
 //consulta por ID
 empleadocontrol.getUniqueEmpleado = async(req,res) => {
     const id = req.params.id;
     const respuesta = await ModelEmpleado.findById({_id:id})
     res.send(respuesta)
 }


 
 //Actualizar registro
 
empleadocontrol.editEmpleado = async(req,res) =>{
     const body = req.body;
     const id = req.params.id;
     const respuesta = await ModelEmpleado.findByIdAndUpdate({_id:id},body);
     res.send(respuesta);
 
 }
 
 //Eliminar un registro 
 empleadocontrol.deleteEmpleado =  async(req,res) =>{
     const id = req.params.id;
     const respuesta = await ModelEmpleado.deleteOne({_id:id});
     res.send(respuesta);
 
 }

 module.exports = empleadocontrol;

 