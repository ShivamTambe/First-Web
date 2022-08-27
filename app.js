const express = require ("express");
const path = require ("path");
const ejs = require("ejs");
const app = express();

app.set("port", 5000);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
})

app.get("/rewards", function(req, res){
    res.render("rewards");
})

app.listen(app.get("port"), function(){
    console.log("server is running on prot "+ app.get("port"));
})