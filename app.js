var express = require("express");
var bodyParser = require("body-parser"); 

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.set("view engine", "ejs");

var toursites = [{name:"Obudu Cattle Ranch", img:"https://cdn-travel.jumia.com/web_hotel_detail_gallery/obudu-ranch-hotel-resort-8152-f1248ff475ee8607103a2cda9144c8a8b7e69774.JPG"},
                     {name:"Yankari Game Reserves", img: "https://i.ytimg.com/vi/ZiserWFKEeM/maxresdefault.jpg"}, 
                     {name:"Isaac Boro Park", img:"http://afrotourism.com/wp-content/uploads/2015/06/IsaacBoroGardenPark1.jpg"},
                     {name:"Obudu Cattle Ranch", img:"https://cdn-travel.jumia.com/web_hotel_detail_gallery/obudu-ranch-hotel-resort-8152-f1248ff475ee8607103a2cda9144c8a8b7e69774.JPG"},
                     {name:"Yankari Game Reserves", img: "https://i.ytimg.com/vi/ZiserWFKEeM/maxresdefault.jpg"}, 
                     {name:"Isaac Boro Park", img:"http://afrotourism.com/wp-content/uploads/2015/06/IsaacBoroGardenPark1.jpg"}];


app.get("/", function(req, res){
    
    res.render("landing");
});


app.get("/toursites", function(req, res){
    
    res.render("toursites", {toursites:toursites});
});



app.post("/toursites", function(req, res){
    //push a new tour site into the toursites array
    var name = req.body.name;
    var img = req.body.img;
    
    var newTourSite = {name : name , img : img};
    
    toursites.push(newTourSite);
    //redirect to the toursites page
    
    res.redirect("toursites");
});


app.get("/toursites/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Travelnigeria's Server just started!!");
});