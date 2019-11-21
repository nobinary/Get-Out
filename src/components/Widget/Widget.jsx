import React from 'react'
import Axios from 'axios'
import './Widget.css'
// import {weatherData} from './../../api/APICalls' 


export default class Widget extends React.Component {
    constructor() {
        super()
        this.state = {
            weather: [],
            feelslike: "",
            status: ""
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        try {  
            const temps= await Axios.get(`http://api.weatherstack.com/current?access_key=c5279c001f9e98167f2f81079ebdf319&query=New York&units=f`)
            
            this.setState(state => ({
            weather: temps.data,
            feelslike: temps.data.current.feelslike,
            status: temps.data.current.weather_descriptions[0]
            })
            
            )
            // console.log(this.state.weather.current.feelslike)
        } catch(error) {
            console.log('Error: ', error)
        }
    }

    // weatherStatus = (stock) => {
    //     if (stock.changePercent > 0) {
    //         return <h2 className="stock_change green">+{stock.changePercent.toFixed(2)}%</h2>
    //     }
    //     else {
    //         return <h2 className="stock_change red" >{stock.changePercent.toFixed(2)}%</h2>
    //     }
    // }

    renderData = () => {
        return(
            <React.Fragment >
            <div className="widget_container">
                <p className="feelslike">{this.state.feelslike} °F</p>
                <img className="status" src={require("./../../media/SVG/rainy.svg")} />
            </div>
            </React.Fragment>
        )
    }
    

    render() {
        return(
            <div className='widget'>
                {this.renderData()}
            </div>
        )
    }
}


 // let weatherSummary = document.createElement("p")
        // weatherSummary.innerHTML=`It's currently ${apiResponse.current.temperature}°F and ${apiResponse.current.weather_descriptions[0]} in ${apiResponse.location.name}.`
        // weatherSummary.className=("widget_p")
        // let feelsLike = document.createElement("p")
        // feelsLike.innerHTML= `It feels like ${apiResponse.current.feelslike}°F, and the Wind Speed is ${apiResponse.current.wind_speed}. `
        // feelsLike.className=("widget_p")
        // let widget = document.querySelector(".widget")
        // widget.append(weatherSummary, feelsLike)
        // console.log(apiResponse);
        // if (apiResponse.current.is_day === "yes") {
        // 	widget.style.backgroundImage = "url('images/day-01.png')";
        // }
        // if (apiResponse.current.is_day === "no") {
        // 	widget.style.backgroundImage = "url('images/night-large-01.png')";
        // }
