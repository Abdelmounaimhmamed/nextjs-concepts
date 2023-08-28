const express = require("express");
const fs = require("fs");
const path = require("path");
const data = require("./dummy.js");
const app = express();


app.get("/events" ,  (req ,res) => {
    
    console.log(data);
    res.send(data);
})





app.listen(3004 , () => {console.log(`App running on port 3004`)})







