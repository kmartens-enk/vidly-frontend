import React, { Component } from "react";

const LikeIcon = (props) => {
  const classes = props.liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    ></i>
  );
};

export default LikeIcon;
