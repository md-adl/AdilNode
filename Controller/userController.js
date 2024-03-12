const userModel = require('../Model/userModel');
const bcrypt = require('bcrypt');

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
            res.json({Message:"User is created", data:response}).status(200);
            
        }).catch((error) =>{
            console.error(error);  // Log the error to the console
            res.json({ Message: "Something went wrong", error: error.message || "Unknown error" }).status(500);
        })
    }
    catch(err){
        res.json({Message:"Something went wrong", error:err}).status(500);
    }

}
const signupUser = async (req, res) => {
    const { name, email, phoneNumber, password } = req.body;
  
    try {
      // Check if user with given email already exists
      const existingUser = await userModel.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ Message: "User with this email already exists" });
      }
  
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user with the hashed password
      const newUser = await userModel.create({ name, email, phoneNumber, password: hashedPassword });
      
      res.json({ Message: "Signup successful", data: newUser }).status(201);
    } catch (error) {
      console.error(error);
      res.json({ Message: "Signup failed", error: error.message || "Unknown error" }).status(500);
    }
  };
  
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user with given email exists
      const user = await userModel.findOne({ email});
  
      if (!user) {
        return res.status(404).json({ Message: "User not found" });
      }
  
      // Validate password
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ Message: "Incorrect password" });
      }
  
      // Return successful login response
      res.json({ Message: "Login successful", data: { email, password/* other user details */ } }).status(200);
    } catch (error) {
      console.error(error);
      res.json({ Message: "Login failed", error: error.message || "Unknown error" }).status(500);
    }
  };
  

module.exports={
    postUser,
    getUserDetails,
    signupUser,
    loginUser
};