import React from "react";
import Axios from "axios";
import "./Widget.css";


export default class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      feelslike: "",
      status: ""
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const temps = await Axios.get(
        `http://api.weatherstack.com/current?access_key=c5279c001f9e98167f2f81079ebdf319&query=New York&units=f`
      );

      this.setState(state => ({
        weather: temps.data,
        feelslike: temps.data.current.feelslike,
        status: temps.data.current.weather_descriptions[0]
      }));
      console.log(this.state.status);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  weatherStatus = () => {
    if (this.state.status === "Sunny" || this.state.status === "Clear") {
      return (
        <img
          className="sunny status"
          alt="img"
          src={require("./../../media/SVG/sunny.svg")}
        />
      );
    }
    if (this.state.status === "Rainy status") {
      return (
        <img
          className="rainy"
          alt="img"
          src={require("./../../media/SVG/rainy.svg")}
        />
      );
    }
    if (this.state.status === "Cloudy" || this.state.status === "Overcast" || this.state.status === "Partly cloudy") {
      return (
        <img
          className="cloudy status"
          alt="img"
          src={require("./../../media/SVG/cloudy.svg")}
        />
      );
    } else {
      return;
    }
  };

  renderData = () => {
    return (
      <React.Fragment>
        <div className="widget_container">
          <p className="feelslike">{this.state.feelslike}°F</p>
          {this.weatherStatus()}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return <div className="widget">{this.renderData()}</div>;
  }
}
