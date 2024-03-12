var express=require('express');
    
    const {postUser, getUserDetails,signupUser, loginUser} = require('../Controller/userController');
var router=express.Router();


console.log("inside");
    

router.post('/createUser', postUser);
router.get('/getUserDetails',getUserDetails);
router.post('/signupUser' ,signupUser)
router.post('/loginUser',loginUser)

module.exports=router;