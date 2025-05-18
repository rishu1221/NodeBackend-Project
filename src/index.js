const express = require("express");

const {PORT} = require('./config');

const app = express();

app.get("/",(req,res)=>{
    console.log("Get Route ");
    res.send(200);
})



app.listen(PORT,()=>{
    console.log(`Listening on : ${PORT}`);
})


