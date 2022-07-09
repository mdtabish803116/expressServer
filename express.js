const express = require('express');

const app = express();

app.get("" , (req , res) => {
      console.log("Hello1")
      res.send("Hello")
});

app.get("/books" , (req , res) => {
    console.log("Hello2")
    res.send(["Mathematics" , "History" , "Physics" , "Chemistry"])
});

app.listen(3000);