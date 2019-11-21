import React from "react";
import { NavLink } from "react-router-dom";
import data from "./../../mockdata.json";
import "./LargeCard.css";

const LargeCard = props => {
  const post = data.filter(
    (post, index) => post.RecAreaID === props.match.params.card_id
  );
  // console.log(data)
  // console.log(props.match.params.card_id)

  // const getActivities = () => {
  //     for (let i=0; post[0]['ACTIVITY'].lenght; i++) {

  //     }
  // }

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
        {console.log(post)}
        <img
          className="card_photo"
          src={
            post[0]["MEDIA"][0]
              ? post[0]["MEDIA"][0].URL
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg/660px-Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg"
          }
          alt="adventure"
        />
        <p>{post[0].RecAreaName}</p>
        <p>{post[0].RecAreaDescription}</p>
        {/* FIX NULL VALUE FOR ACTIVITY */}
        <p className="activities">
          {" "}
          Activities:{" "}
          {post[0]["ACTIVITY"][0].ActivityName
            ? post[0]["ACTIVITY"][0].ActivityName
            : null}{" "}
        </p>
        <div className="more_info">
          <p>{post[0]["LINK"][0].LinkType}</p>
          <p>{post[0]["LINK"][0].URL}</p>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;

// idee={item.RecAreaID}
// name={item.RecAreaName}
// imgUrl={item['MEDIA'][0] ? item['MEDIA'][0].URL : "#"}
// history={history}
