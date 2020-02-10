import React, { Component } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "./LargeCard.css";

export default class LargeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adventure: {}
    };
  }

  componentDidMount() {
    this.fetchAdventures();
  }


  getActivities = () => {
    return this.state.adventure[0].ACTIVITY.map(item => {
      console.log(item.ActivityName);
      return  <p className="activity">{item.ActivityName +' '}</p>;
    });
  };

  fetchAdventures = async () => {
    try {
      const adventures = await Axios.get(
        `https://5dd1ce6b15bbc2001448d431.mockapi.io/RecAreas`
      );
      console.log(adventures);
      this.setState(state => ({
        adventure: adventures.data.filter(
          (post, index) => post.RecAreaID === this.props.match.params.card_id
        )
      }));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  render() {
    if (this.state.adventure && this.state.adventure.length > 0) {
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
          <div className="LargeCard_container">
            {console.log(this.state.adventure)}
            <img
              className="card_photo"
              src={
                this.state.adventure[0]["MEDIA"][0]
                  ? this.state.adventure[0]["MEDIA"][0].URL
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg/660px-Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg"
              }
              alt="adventure"
            />
            <p>{this.state.adventure[0].RecAreaName}</p>
            <p>{this.state.adventure[0].RecAreaDescription}</p>
            <div className='activities_container'>{this.getActivities()}</div>
            <div className="link_container" >
              <a className="more_info" href={this.state.adventure[0]["LINK"][0].URL}>
                {this.state.adventure[0]["LINK"][0].LinkType}
              </a>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
