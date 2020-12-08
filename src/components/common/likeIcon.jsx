import React, { Component } from "react";

const LikeIcon = ({ liked, onClick }) => {
  const classes = liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    ></i>
  );
};

export default LikeIcon;
