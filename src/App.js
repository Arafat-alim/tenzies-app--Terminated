import React from "react";
import Die from "./components/Die";
function App() {
  //! Creating a state
  const [tenzies, setTenzies] = React.useState(false);
  const [dice, setDice] = React.useState(allNewDice());

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

  function holdDice(id) {
    setDice((prevDice) => {
      prevDice.map((die) => {
        return die.id === id ? { ...die, held: !die.held } : die;
      });
    });
  }
  const dieElement = dice.map((die) => {
    return <Die key={die.id} hold={() => holdDice(die.id)} />;
  });

  function rollDice() {
    setDice(allNewDice());
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{dieElement}</div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "Reset" : "Roll"}
      </button>
    </main>
  );
}

export default App;
