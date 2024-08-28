const express = require("express");
const app = express();
console.dir(app);
const port = 8000; //8080

// app.use((req,res)=>{
//     console.log(`request received`);
//     // res.send("this is basic response");
//     // res.send({
//     //     name:"aftab",
//     //     color:"white"
//     // })
//     let code = "<h1>fruits</h1><ul><li>apple</li><ul>"
//     res.send(code);
// });

// app.post("/post",(req,res)=>{
//     res.send("you send post request")
// })

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})

app.get("/",(req,res)=>{
    // res.send({
    //     name:"appu",
    //     color:"red",
    // })
    res.send("you contacted root path")
});

app.get("/apple",(req,res)=>{
    res.send({
        name:"appu",
        color:"red",
    })
    
});

// app.get("*",(req,res)=>{
//     res.send("this path not exits");
// });

app.get("/:username/:id",(req,res)=>{
    let {username,id}= req.params;
    console.log(req.params);
    let htmlStr = `<h1>welcome to page of @${username}</h1>`
    res.send(htmlStr);
});

app.get("/search",(req,res)=>{
    let {q}= req.query;
    // if(!q){
    //     res.send("<h2>no search found</h2>")
    // }
    res.send(`the search you is @${q}`);
    console.log(req.query)
   
});
