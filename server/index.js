const express = require("express");
const get_sensor_reading=require("./get-reading");
const app = express();
app.get("/temperature",(req, res) => {
    get_sensor_reading((err,temperature,humidity)=>{
		if(!err) 
		{
			let my_temperature=temperature.toFixed(1);
			console.log(my_temperature);
			res.send(`${my_temperature}°C`);
		}
	});
});
app.get("/humidity",(req, res) => {
    get_sensor_reading((err,temperature,humidity)=>{
		if(!err) 
		{
			let my_humidity=humidity.toFixed(1);
			console.log(my_humidity);
			res.send(`${my_humidity}%`);
		}
	});
});
app.listen(3000, () => {
	console.log("Server listening on port 3000")
});