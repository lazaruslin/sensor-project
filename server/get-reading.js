const sensor =require("node-dht-sensor");
const get_sensor_readings=(callback)=>{
   sensor.read(11,17,(err,temperature,humidity)=>{
       if(err)
       {
	   return callback(err);
       }
       callback(null,temperature,humidity);
   });
}



module.exports=get_sensor_readings;
