import React from "react";

import "./Team.scss";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Team = (props) => {
  return (
    <div className="wrapper">
      <div className="t-group">
        <h3 className="title">{props.fullName}</h3>
        <h4 className="description">{props.description}</h4>
        <h5 className="founded">{props.establishment}</h5>
      </div>

      <div className="icon-wrapper">

        <div className="group-icon" >
          <FaRegEnvelope className="icons" />
          <span>{props.email}</span>
        </div>

        <div className="group-icon">
          <FaPhoneAlt className="icons" />
          <span>{props.phone}</span>
        </div>

        <div className="group-icon">
          <FaLocationArrow className="icons" />
          <span>{props.address}</span>
        </div>

        <div className="group-icon">
          <a href={props.website}><CgWebsite className="icons" /></a>
          <span><a href={props.website}>{props.website}</a></span>
        </div>
      </div>


    </div>
  );
};

export default Team;
