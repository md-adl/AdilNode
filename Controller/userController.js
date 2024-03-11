const userModel = require('../Model/userModel');

const postUser=(req, res)=>{
 
        try{
            userModel.create(req.body).then((response)=>{
                res.json({Message:"User is created", data:response}).status(201);
            }).catch((error) =>{
                res.json({Message:"Something went wrong", error:error}).status(500);
            })
        }
        catch(err){
            res.json({Message:"Something went wrong", error:err}).status(500);
        }
}
const getUserDetails=(req, res)=>{
    try{
        userModel.find({}).then((response)=>{
            res.json({Message:"User is created", data:response}).status(200);
        }).catch((error) =>{
            res.json({Message:"Something went wrong", error:error}).status(500);
        })
    }
    catch(err){
        res.json({Message:"Something went wrong", error:err}).status(500);
    }
}

module.exports={
    postUser,
    getUserDetails
};