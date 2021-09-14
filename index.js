// declaring variables and requiring packages
const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_database", {useNewUrlParser: true})

app.set("view engine","ejs");

// creating the server
app.listen(4000, () => {
    console.log("App listening to port 4000");
});

app.get("/", (req, res) => {
    res.render('index');
})

app.get('/about',(req,res)=>{ 
//res.sendFile(path.resolve(__dirname,'pages/about.html')) 
    res.render('about');
}) 
app.get('/contact',(req,res)=>{
//res.sendFile(path.resolve(__dirname,'pages/contact.html'))
res.render('contact');
}) 
app.get('/post',(req,res)=>{
//res.sendFile(path.resolve(__dirname,'pages/post.html'))
res.render('post')
})

app.use(express.static("public"));





