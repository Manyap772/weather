const getWeather=(city)=>{
	cityName.innerHTML=city
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
		cloud_pct.innerHTML=response.cloud_pct
temp.innerHTML=response.temp
feels_like.innerHTML=response.feels_like
humidity.innerHTML=response.humidity
min_temp.innerHTML=response.min_temp
max_temp.innerHTML=response.max_temp
wind_speed.innerHTML=response.windspeed
wind_degrees.innerHTML=response.wind_degrees
sunrise.innerHTML=response.sunrise
sunset.innerHTML=response.sunset


	}
});

xhr.open('GET', 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city'= + city);
xhr.setRequestHeader('x-rapidapi-key', '6e3b23c2eemsha94db51cca4b9abp1aa892jsnb7524c0fe8c6');
xhr.setRequestHeader('x-rapidapi-host', 'weather-by-api-ninjas.p.rapidapi.com');

xhr.send(data);}
submitEvent.addEventListner("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")