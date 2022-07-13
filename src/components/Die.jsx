import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.held ? "#59E391" : "white",
  };
  return (
    <div className="die-face" style={styles}>
      <div className="die-num">{PaymentResponse.num}</div>
    </div>
  );
}
