var express = require("express");
var app = express();

app.use(express.static("assets"));
// app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/yourfriends/:name", function(req, res){
    var name = req.params.name;
    res.render("friends.ejs", {nameVar: name});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Fred"},
        {title: "Post 2", author: "Fred"},
        {title: "Post 3", author: "Fred"}
    ];
    res.render("posts.ejs", {posts: posts});
});

app.get("/dog", function(req, res){
    console.log("stuff");
    res.send("arf");
});

app.get("/x/:name", function(req, res){
    console.log(req.params);
    res.send("name"+req.params["name"]);
});

app.get("/speak/:animal", function(req, res){
    var response = "I don't know";
    switch(req.params.animal) {
        case "pig":
            respnose = "oink";
            break;
        case "dog":
            response = "arf";
            break;
        case "cow":
            response = "moo";
    }
    res.send(response);
});

app.get("*", function(req, res){
    console.log("stuff");
    res.send("qwerty");
});

// app.method("/xyz/:abc/:def") means pattern

app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
});