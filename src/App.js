import React from "react";
function App() {
  //! Creating a state
  const [tenzies, setTenzies] = React.useState(false);
  const [dice, setDice] = React.useState(allNewDice());

  console.log(dice);

  React.useEffect(() => {
    let firstValue = dice[0].value;
    let allHeld = dice.every((die) => die.held);
    let allSameNumber = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameNumber) {
      setTenzies(true);
    }
  }, [dice]);

  //! function
  // function to create a random Number
  function randomValue() {
    return Math.ceil(Math.random() * 6);
  }
  console.log(randomValue());

  //function to create a numbers total 10
  function allNewDice() {
    const newArry = [];
    for (let i = 0; i < 10; i++) {
      const newDie = {
        value: randomValue(),
        held: false,
        id: i + 1,
      };
      newArry.push(newDie);
    }
    return newArry;
  }
  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">die Element</div>
      <button className="roll-dice">{tenzies ? "Reset" : "Roll"}</button>
    </main>
  );
}

export default App;
