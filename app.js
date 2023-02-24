
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app=express();


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req,res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    
    const query=req.body.cityName;

const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=API KEY&units=metric";


https.get(url,function(response){
    

    response.on("data", function(data){
        const weatherData = JSON.parse(data)
        const temp=weatherData.main.temp;
        const weatherDes=weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const url2="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        
        res.write("<h1> The temperature in "+ query + " is "+ temp + " degree Celcius </h1>");
        res.write("<h2> The Weather Description of "+ query + " is "+ weatherDes + "</h2>");
        res.write("<img src=" + url2 + ">");
        res.send()

    });
});
})


app.listen(3000,function(){
    console.log("Server started at port 3000");
});
