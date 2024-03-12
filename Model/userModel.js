var mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    phoneNumber:{type:String, required:true},
    password: { type: mongoose.Schema.Types.Mixed, required: true },

})
const userModel = mongoose.model('user',UserSchema);
module.exports=userModel;