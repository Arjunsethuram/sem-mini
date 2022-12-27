import mongoose from "mongoose";
import Joi from "joi"


const User = mongoose.model('User', new mongoose.Schema({
    
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true
    },
    password:{
        type:String,
        required:true
    }
    
  }));
  
  function validateUser(user) {
    const schema = Joi.object({
      
       fname:Joi.string().required(), 
       lname:Joi.string().required(), 
       email:Joi.string().required(),
       password:Joi.string().required(),
      
    });
  
    return schema.validate(user);
}
export default User ;
export {validateUser};