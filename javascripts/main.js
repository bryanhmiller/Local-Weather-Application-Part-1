$(document).ready(() => {

	const apiKey = "d8d93c76ba0e411ee16dc2b892de9acc";
	let zipCode = 37129;

	// $("#zip-code").val();

	const loadWeather = (zipCode) => {
		return new Promise ((resolve, reject) => {
			$.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=${apiKey}`)
			.done((data) => resolve(data))
			.fail((error) => reject(error));
		});
	};

	loadWeather(zipCode).then((results) => {
	console.log(results);
	})
	.catch((error) =>{
		console.log("error");
	})

});


