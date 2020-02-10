import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import "./Adventures.css";
import { Card } from "./../Card/Card";

export default class Adventures extends Component {
  constructor() {
    super();
    this.state = {
      adventures: [],
      adventuresToDelete: {},
      toDelete: false
    };
  }
  componentDidMount() {
    this.fetchAdventures();
  }

  fetchAdventures = async () => {
    try {
      const adventures = await Axios.get(
        `https://5dd1ce6b15bbc2001448d431.mockapi.io/RecAreas`
      );
      console.log(adventures);
      this.setState(state => ({
        adventures: [...state.adventures, ...adventures.data]
      }));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  renderAdventures = () => {
    const { history } = this.props;
    console.log(this.state.adventures);
    if (this.state.adventures && this.state.adventures.length > 0) {
      return this.state.adventures.map(item => {
        // console.log(item.RecAreaID);
        return (
          <Card
            id={item.RecAreaID}
            key={item.RecAreaName}
            name={item.RecAreaName}
            imgUrl={
              item["MEDIA"][0]
                ? item["MEDIA"][0]["URL"]
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg/660px-Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg"
            }
            history={history}
          />
        );
      });
    }
  };

  render() {
    return (
      <div>
        <div className="adv_header">
          <NavLink exact to="/create" activeClassName="active">
            <img
              className="add_adv"
              src={require("./../../media/SVG/add_adventure.svg")}
              alt="button"
            />
          </NavLink>
        </div>
        <main className="adventure_container">{this.renderAdventures()}</main>
      </div>
    );
  }
}
