var express= require("express");
var app= express();
var request= require("request");

app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/", function (req, res) {
        res.render("home") ;
 });

 app.get("/result", function (req, res) {
    var movieName=req.query.searche.trimRight();
    request("http://www.omdbapi.com/?s="+movieName+"&apikey=thewdb", function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("result",{data:data}) ;
        }
    }); 
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
 console.log("Server Has Started!");
});