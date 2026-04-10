"use client";
import { useState } from "react";

export default function GamePage() {
  const [playerName, setPlayerName] = useState("");
  const [playerNameInput, setPlayerNameInput] = useState("");
  const [playerCoins, setPlayerCoins] = useState(0);
  const [gameStep, setGameStep] = useState("nameRender");

  const [showPotionModal, setShowPotionModal] = useState(false);
  const [showMessage, setShowMessage] = useState("");

  const [playerHp, setPlayerHp] = useState(30);
  const [enemyName, setEnemyName] = useState("");
  const [enemyHp, setEnemyHp] = useState(0);
  const [killCounter, setKillCounter] = useState(0);

  function randomName(): string {
    const arrNames = ["Troll", "Gremlin", "Chunkie", "Doise"];
    const randomIndex = Math.floor(Math.random() * arrNames.length);
    return arrNames[randomIndex];
  }

  function coinsToNames(): number {
    if (enemyName === "Troll") {
      return 5;
    } else if (enemyName === "Gremlin") {
      return 3;
    } else if (enemyName === "Chunkie") {
      return 2;
    } else if (enemyName === "Doise") {
      return 1;
    } else {
      return 0;
    }
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

  function attackPlayer() {
    const damage = randomEnemyAttackNum();
    const newPlayerHp = playerHp - damage;
    if (newPlayerHp <= 0) {
      setPlayerHp(0);
      setGameStep("GameOver");
    } else {
      setPlayerHp(newPlayerHp);
    }
  }

  function attackTarget() {
    const damage = randomPlayerAttackNum();
    const newEnemyHp = enemyHp - damage;
    if (newEnemyHp <= 0) {
      setEnemyHp(0);
      setPlayerCoins((prevCoins): number => prevCoins + coinsToNames());
      setKillCounter((prev) => prev + 1);
    } else {
      setEnemyHp(newEnemyHp);
      attackPlayer();
    }
  }

  if (gameStep === "nameRender") {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold mb-2 p-2  animate-pulse">
          Enter your Heroes Name
        </h1>
        <input
          type="text"
          value={playerNameInput}
          onChange={(e) => setPlayerNameInput(e.target.value)}
          placeholder="Enter Hero Name"
          className="text-center mb-3 p-2 border rounded"
        />
        <button
          className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer"
          onClick={() => {
            setPlayerName(playerNameInput);
            setGameStep("Town");
            if (playerNameInput.trim() === "") {
              alert("Please enter a valid name.");
              setPlayerName("");
              setGameStep("nameRender");
            }
          }}
        >
          Continue
        </button>
      </main>
    );
  }

  if (gameStep === "Town") {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold mb-2 p-2  animate-pulse">
          Welcome to Town, {playerName}.
        </h1>
        <p>
          <li>You have {playerHp} Hit Points</li>
          <li>{playerCoins} coins available</li>
          <li>Slain {killCounter} monsters</li>
        </p>
        <button
          className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer"
          onClick={() => {
            setGameStep("Battle");
            setEnemyName(randomName());
            setEnemyHp(randomEnemyHp());
          }}
        >
          Forest
        </button>
        <div>
          <button
            className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer"
            onClick={() => {
              setShowPotionModal(true);
            }}
          >
            Buy Potion
          </button>
        </div>
        {showPotionModal === true && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-blue-400 p-6 rounded-lg shadow-lg">
              <p>Buy Potion for 5 coins to restore 10 HP?</p>
              {showMessage && <p>{showMessage}</p>}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    if (playerCoins >= 5) {
                      setPlayerCoins((prev) => prev - 5);
                      setPlayerHp((prev) => prev + 10);
                      setShowMessage(`Purchased Completed.`);
                    } else {
                      setShowMessage(
                        `You Broke NOOB! You only have ${playerCoins} coins!`,
                      );
                    }
                  }}
                  className="mr-2 mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 hover:scale-105 transition-duration-5000 hover:cursor-pointer ring-1"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setShowPotionModal(false);
                    setShowMessage("")
                  }}
                  className="ml-2 mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 hover:scale-105 transition-duration-5000 hover:cursor-pointer ring-1"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }

  if (gameStep === "Battle") {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold mb-2 p-2  animate-pulse">
          {enemyHp > 0
            ? `${enemyName} has appear. `
            : 
            `${enemyName} has 0 Hit Points. 
            ${playerName} has slain ${enemyName} and received ${coinsToNames()} coins. 
            ${playerName} has ${playerCoins} coins!`}
        </h1>
        <div className="flex justify-between items-center w-full max-w-4xl px-8 mb-8">
          <div className ="text-left">
            <h2 className="text-2xl font-bold">{playerName}</h2>
            <p>{playerHp} Hit Points</p>
          </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold"> {enemyName}</h2>
          <p>{enemyHp} Hit Points</p>
        </div>
        </div>


        {enemyHp > 0 ? (
          <button
            className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer"
            onClick={() => {
              attackTarget();
            }}
          >
            Attack!
          </button>
        ) : (
          <>
            <button
              className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer"
              onClick={() => {
                setGameStep("Town");
              }}
            >
              Return to Town.
            </button>
            <button
              className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer"
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

  if (gameStep === "GameOver") {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl font-bold mb-2 p-2  animate-pulse">
          Game Over, {playerName}. You have slain {killCounter} monsters.
        </h1>
        <button
          className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer"
          onClick={() => {
            setGameStep("nameRender");
            setPlayerHp(30);
            setPlayerCoins(0);
          }}
        >
          Play Again
        </button>
      </main>
    );
  }
  return "something went wrong";
}
