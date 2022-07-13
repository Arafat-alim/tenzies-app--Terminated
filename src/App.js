import React from "react";
function App() {
  //! Creating a state
  const [tenzies, setTenzies] = React.useState(false);
  return (
    <main>
      <h1>Tenzies</h1>
      <p></p>
      <div className="die-container">die Element</div>
      <button className="roll-dice">{tenzies ? "Reset" : "Roll"}</button>
    </main>
  );
}

export default App;
