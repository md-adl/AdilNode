var express = require('express');
var app=express();
var userRouter=require('./Router/userRouter');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://garvthadani:123Gaurav@cluster0.sa0jbba.mongodb.net/adilTest?retryWrites=true&w=majority&appName=Cluster0',{
    useUnifiedTopology:true,
    useNewUrlParser: true,
}).then(()=>{
  console.log("connected to db")
})

app.use('/api/v1/user',userRouter);



app.listen(5001,()=>{
    console.log("Listening to port 5001")
})
