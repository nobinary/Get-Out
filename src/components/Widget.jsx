import React from 'react'
import Axios from 'axios'



const body = document.body;
const url = `http://api.weatherstack.com/current?access_key=c5279c001f9e98167f2f81079ebdf319&query=New York&units=f`


const Widget = () => {
// 	axios.get(url)
// 	.then(response => {
// 	const apiResponse = response.data;
// 	let weatherSummary = document.createElement("p")
// 	weatherSummary.innerHTML=`It's currently ${apiResponse.current.temperature}°F and ${apiResponse.current.weather_descriptions[0]} in ${apiResponse.location.name}.`
// 	weatherSummary.className=("widget_p")
// 	let feelsLike = document.createElement("p")
// 	feelsLike.innerHTML= `It feels like ${apiResponse.current.feelslike}°F, and the Wind Speed is ${apiResponse.current.wind_speed}. `
// 	feelsLike.className=("widget_p")
// 	let widget = document.querySelector(".widget")
// 	widget.append(weatherSummary, feelsLike)
// 	console.log(apiResponse);
// 	if (apiResponse.current.is_day === "yes") {
// 		widget.style.backgroundImage = "url('images/day-01.png')";
// 	}
// 	if (apiResponse.current.is_day === "no") {
// 		widget.style.backgroundImage = "url('images/night-large-01.png')";
// 	}
//   })
//   	.catch(error => {
//     console.log(error);
//   });
}

// window.onload = Widget()

