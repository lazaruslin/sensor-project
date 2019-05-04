const get_sensor_readings=require("./get-reading");
const cached_readings={temperature:0,humidity:0};

setInterval(()=>{
	get_sensor_readings((err,temperature,humidity)=>{
		if(err)
		{
			return console.error(err);
		}
		 else
		 {
			cached_readings.temperature=temperature.toFixed(1);
			cached_readings.humidity=humidity.toFixed(1);
		    }
	});
},2000);

module.exports.get_temperature=()=>cached_readings.temperature;
module.exports.get_humidity=()=>cached_readings.humidity;