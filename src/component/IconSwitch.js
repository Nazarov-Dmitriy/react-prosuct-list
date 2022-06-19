import React from "react";

export default function IconSwitch(props) {
  return (
    <div className="icons position-absolute">
      <span onClick = {props.handkClick} className="material-icons">{props.icon}</span>
    </div>
  );
}
