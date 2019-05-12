$(document).ready(function() {
	const fetch_temperature = () => {
		fetch('/temperature').then(response => response.text())
		    .then(data => {
				console.log(data);
				$("#temperature").text(data);
			})
			.catch(e => console.log("Oops, error", e))
	};
	const fetch_humidity = () => {
	fetch('/humidity').then(response => response.text())
		    .then(data => {
				console.log(data);
				$("#humidity").text(data);
			})
			.catch(e => console.log("Oops, error", e))
    }
	
	setInterval(() => {
		fetch_humidity();
		fetch_temperature();
	},2000)
	
	const temperatureCanvasCtx = $("#temperature_chart")[0].getContext("2d");
	const temperatyreCanvasCtx = new Chart(temperatureCanvasCtx, {
		
		type: "line",
		data: {
			labels: ["8:10","8:11","8:12","8:13","8:14","8:15","8:16","8:17","8:18","8:19"],
			dataset: [{
				data: [13, 12, 10, 17, 20, 18, 14, 16, 11, 13],
				backgroundColor: "rgba(0,200,100,0.5)"
			}]
		},
		options:{
			legend:{display:false},
			responsive:true,
			maintainAspectRatio:true
		}
	});
});