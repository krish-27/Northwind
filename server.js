var express =require("express");  
var app=express();  

var onDefault=function(req, res){
    res.send("<h1>Northwind</h1>"
              };
var aboutus=function(req, res){
    res.send("
<h3> Northwind is a multinational company has their 12 Offices all over world. They want to deploy business
application on public cloud with the help of Platform As A Service.
Contoso has public Cloud subscription to use it as Infrastructure as a Service (I-a-a-S) and Platform As A
Service </h3>"
              };
app.get("/",onDefault);  
app.get("/aboutus",onAboutUs);  
var server=app.listen(8081);
console.log("Server is running on port 8081");
