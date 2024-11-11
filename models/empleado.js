const mongoose = require("mongoose");
const empleadosModel =new mongoose.Schema(
{
   NombreEmpleado:{type:String},
   cargoEmpleado:{type:String},
   oficinaEmpleado:{type:String},
   salarioEmpleado:{type:Number}

   

},

{
    timestamps:true,
    versionKey:false
}



)


const ModelEmpleado =mongoose.model("empleados" , empleadosModel);
module.exports = ModelEmpleado;

