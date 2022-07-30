import React from "react";
import Avatar from "./Avatar";
import Paragraph from "./Paragraph";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.img} />
      </div>
      <div className="bottom">
        <Paragraph details={props.tel} />
        <Paragraph details={props.email} />
      </div>
    </div>
  );
}

export default Card;
