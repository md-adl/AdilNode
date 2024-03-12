const userModel = require('../Model/userModel');

const postUser=(req, res)=>{
    console.log(req.body);
 
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
            console.log(response)
            res.render('index', { users: response });
            
        }).catch((error) =>{
            console.error(error);  // Log the error to the console
            res.json({ Message: "Something went wrong", error: error.message || "Unknown error" }).status(500);
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