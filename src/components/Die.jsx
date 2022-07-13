import React from "react";

export default function Die(props) {
  console.log(props);
  const styles = {
    backgroundColor: props.held ? "#59E391" : "white",
  };
  return (
    <div className="die-face" style={styles}>
      <div className="die-num">1</div>
    </div>
  );
}
