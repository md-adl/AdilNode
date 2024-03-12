var express=require('express');
    
    const {postUser, getUserDetails} = require('../Controller/userController');
var router=express.Router();


console.log("inside");
    

router.post('/createUser', postUser);
router.get('/getUserDetails',getUserDetails);

module.exports=router;