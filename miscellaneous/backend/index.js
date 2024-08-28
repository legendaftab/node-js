const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    console.log(req.query);
    res.send(`standard get details${user}`);

});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.post("/register", (req, res) => {
    let {user,password} =  req.body;
    console.log(req.body);
    res.send(`standard post details ${user}`)
})
app.listen(port, () => {
    console.log(`app listening on ${port}`);
})