/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import LikeButton from "./LikeButton";

export default function Card(props) {
  console.log(props);
  return (
    <div className="travel-container">
      <div className="trip-details">
        <div className="location">
          <h3>{props.location}</h3>
        </div>
        <div className="start-date">
          <p>{props.startDate}</p>
        </div>
        <div className="end-Date">
          <p>{props.endDate}</p>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
        <LikeButton />
      </div>

      <img src={props.url} className="img"></img>
    </div>
  );
}
