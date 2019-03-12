var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/process",function(req,res){
  res.sendFile(path + "process.html");
});

router.get("/projects",function(req,res){
  res.sendFile(path + "projects.html");  
});

router.get("/testimonials",function(req,res){
  res.sendFile(path + "testimonials.html");  
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/development",function(req,res){
  res.sendFile(path + "/subviews/development.html");  
});
  
router.get("/design",function(req,res){
  res.sendFile(path + "/subviews/design.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});