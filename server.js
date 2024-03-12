var express = require('express');
var app=express();
var userRouter=require('./Router/userRouter');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
const ejs = require('ejs');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://garvthadani:123Gaurav@cluster0.sa0jbba.mongodb.net/adilTest?retryWrites=true&w=majority&appName=Cluster0',{
    useUnifiedTopology:true,
    useNewUrlParser: true,
}).then(()=>{
  console.log("connected to db")
})

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.use('/api/v1/user',userRouter);



app.listen(5001,()=>{
    console.log("Listening to port 5001")
})
