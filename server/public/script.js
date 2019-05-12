$(document).ready(function() {
	
	const update_chart_array=(arr,val,size)=>{
		
		arr.push(val);
		if(arr.length>size)
		{
			arr.shift()
		}
	}
	
	
	const temperatureCanvasCtx = $("#temperature_chart")[0].getContext("2d");
	const temperatureChart_options={
		
		type: "line",
		data: {
			labels: [],
			datasets: [{
				data: [],
				backgroundColor: "rgba(0,200,100,0.5)"
			}]
		},
		options:{
			legend:{display:false},
			responsive:true,
			maintainAspectRatio:true,
			scales:{
				yAxes:[{ticks:{suggestedMin:10,suggestedMax:40}}]
			}
		}
	}
	const temperatureChart = new Chart(temperatureCanvasCtx,temperatureChart_options);
	
	const humidityCanvasCtx = $("#humidity_chart")[0].getContext("2d");
	const humidityChart_options={
		
		type: "line",
		data: {
			labels: [],
			datasets: [{
				data: [],
				backgroundColor: "rgba(0,200,100,0.5)"
			}]
		},
		options:{
			legend:{display:false},
			responsive:true,
			maintainAspectRatio:true,
			scales:{
				yAxes:[{ticks:{suggestedMin:0,suggestedMax:100}}]
			}
		}
	}
	const humidityChart = new Chart(humidityCanvasCtx,humidityChart_options);
	
	const fetch_temperature = () => {
		fetch('/temperature').then(response => response.json())
		    .then(data => {
				
				const now =new Date();
				const timeNow=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
				update_chart_array(temperatureChart_options.data.labels,timeNow,10);
				update_chart_array(temperatureChart_options.data.datasets[0].data,data.val,10);
				temperatureChart.update();
				console.log(data.val);
				$("#temperature").text(data.val);
			})
			.catch(e => console.log("Oops, error", e))
	};
	const fetch_humidity = () => {
		fetch('/humidity').then(response => response.json())
		    .then(data => {
				
				const now =new Date();
				const timeNow=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
				update_chart_array(humidityChart_options.data.labels,timeNow,10);
				update_chart_array(humidityChart_options.data.datasets[0].data,data.val,10);
				humidityChart.update();
				console.log(data.val);
				$("#humidity").text(data.val);
			}
			.catch(e => console.log("Oops, error", e))
	}
	
	setInterval(() => {
		fetch_humidity();
		fetch_temperature();
	},2000)
	