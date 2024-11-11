const mongoose = require("mongoose");
const userModel =new mongoose.Schema(
{
   Nombreuser:{
    type:String
   },
   
   Passworduser:{
    type:String
   }

},

{
    timestamps:true,
    versionKey:false
}



)


const ModelUser =mongoose.model("usuarios" , userModel);
module.exports = ModelUser;

