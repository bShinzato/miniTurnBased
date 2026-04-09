"use client";
import { useState } from "react";

export default function GamePage() {
  const [playerName, setPlayerName] = useState("");
  const [playerNameInput, setPlayerNameInput] = useState("");
  const [gameStep, setGameStep] = useState("nameRender");

  const [playerHp, setPlayerHp] = useState(30);
  const [enemyName, setEnemyName] = useState("");
  const [enemyHp, setEnemyHp] = useState(0);

  function randomName(): string {
    const arrNames = ["Troll", "Gremlin", "Chunkie", "Doise"];
    const randomIndex = Math.floor(Math.random() * arrNames.length);
    return arrNames[randomIndex];
  }

  function randomEnemyHp(): number {
    return Math.floor(Math.random() * 30) + 1;
  }

  function randomPlayerAttackNum(): number {
    return Math.floor(Math.random() * 7) + 1;
  }

  function randomEnemyAttackNum(): number {
    return Math.floor(Math.random() * 5) + 1;
  }

  function attackTarget() {
    const damage = randomPlayerAttackNum();
    const newEnemyHp = enemyHp - damage;
    if (newEnemyHp < 0) {
      setEnemyHp(0);
    } else {
      setEnemyHp(newEnemyHp);
    }
  }

  function attackTargetPlayer() {
    const damage = randomEnemyAttackNum();
    const newPlayerHp = playerHp - damage;
    setPlayerHp(newPlayerHp);
  }

  if (gameStep === "nameRender") {
    return (
      <main>
        <h1>Enter your Heroes Name</h1>
        <input
          type="text"
          value={playerNameInput}
          onChange={(e) => setPlayerNameInput(e.target.value)}
          placeholder="Enter your Heroes Name"
        />
        <button
          onClick={() => {
            setPlayerName(playerNameInput);
            setGameStep("Town");
          }}
        >
          Continue
        </button>
      </main>
    );
  }

  if (gameStep === "Town") {
    return (
      <main>
        <h1>Welcome to Town, {playerName}.</h1>
        <button
          onClick={() => {
            setGameStep("Battle");
            setEnemyName(randomName());
            setEnemyHp(randomEnemyHp());
          }}
        >
          Forest
        </button>
      </main>
    );
  }

  if (gameStep === "Battle") {
    return (
      <main>
        <h1>
          {enemyHp > 0
            ? `${enemyName} has appear. ${enemyName} has ${enemyHp} Hit Points.`
            : `${enemyName} has 0 Hit Points. ${playerName} has slain ${enemyName}.`}
        </h1>

        {enemyHp > 0 ? (
          <button
            onClick={() => {
              attackTarget();
            }}
          >
            Attack!
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setGameStep("Town");
                setPlayerHp(30);
              }}
            >
              Return to Town to heal up.
            </button>
            <button
              onClick={() => {
                setGameStep("Battle");
                setEnemyName(randomName());
                setEnemyHp(randomEnemyHp());
              }}
            >
              Continue to fight!
            </button>
          </>
        )}
      </main>
    );
  }
  return "something went wrong";
}
