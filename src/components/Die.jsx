import React from "react";

export default function Die(props) {
  console.log(props);
  const styles = {
    backgroundColor: props.held ? "#59E391" : "white",
  };
  return (
    <div className="die-face" style={styles} onClick={props.hold}>
      <div className="die-num">{props.value}</div>
    </div>
  );
}
