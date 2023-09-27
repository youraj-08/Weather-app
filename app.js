require("dotenv").config();
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.post("/weather", function (req, res) {

    const query = req.body.query;



    if (query === "") {
        return res.status(400).json({ error: 'Location required.' });
      }

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + process.env.API_KEY + "&units=metric";

    https.get(url, function (response) {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp;
            const weatherDes = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const humidity = weatherData.main.humidity;
            const speed = weatherData.wind.speed; 

            res.json({ temp, weatherDes, icon, humidity, speed });

        });
    });
})


app.listen(9000, function () {
    console.log("Server started at port 9000");
});