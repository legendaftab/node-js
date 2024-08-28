const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname,"/public")))
// app.use(express.static(path.join(__dirname,"/public/css")));
//app.use(express.static(path.join(__dirname,"/public/js")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    // res.render("rolldice.ejs",{num:diceValue});
     res.render("rolldice.ejs",{diceValue});
});

app.get("/ig/:username",(req,res)=>{
    const instaData = require("./data.json");
    
    const followers = ["appu","raja","king","ok boss"];
    let {username} = req.params;
    const data = instaData[username];

    if(data){
        res.render("instagram.ejs",{username,followers,data});
    }else{
       res.render("error.ejs");
    }
    //console.log(data);
    // console.log(req.params);
    console.log(username);
    
})
app.listen(port, () => {
    console.log(`app listing on port ${port}`);
});
