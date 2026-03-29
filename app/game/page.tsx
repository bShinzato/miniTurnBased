"use client"
import { useState } from 'react'

export default function GamePage() {
  const [playerName, setPlayerName] = useState('')
  const [playerNameInput, setPlayerNameInput] = useState('')
  const [gameStep, setGameStep] = useState('nameRender')

  const [playerHp, setPlayerHp] = useState(30)
  const [enemyName, setEnemyName] = useState('')
  const [enemyHp, setEnemyHp] = useState(0)

  function randomName(): string {
    const arrNames = ['Troll', 'Gremlin', 'Chunkie', 'Doise']
    const randomIndex = Math.floor(Math.random() * arrNames.length)
    return arrNames[randomIndex] 
  }

  function randomEnemyHp(): number {
     return Math.floor(Math.random() * 30) + 1
  }



  if (gameStep === 'nameRender') {
    return (
      <main>
          <h1>Enter your Heroes Name</h1>
          <input
            type = 'text'
            value = {playerNameInput}
            onChange = {(e) => setPlayerNameInput(e.target.value)}
            placeholder = 'Enter your Heroes Name'
          />
          <button onClick = {() => {
            setPlayerName(playerNameInput)
            setGameStep('Town')}}
            >
            Continue
          </button>
      </main>
    )
  }

  if (gameStep === 'Town') {
    return (
      <main>
        <h1>Welcome to Town, {playerName}.</h1>
        <button
          onClick ={
            () => {
              setGameStep('Battle')
              setEnemyName(randomName())
              setEnemyHp(randomEnemyHp)
            }
          }>
            Forest
        </button>
      </main>
    )
  }

  if (gameStep === 'Battle') {
    return (
      <main>
        <h1>{enemyName} has appeared. {enemyName} has {enemyHp} Hit Points.</h1>
      </main>
    )
  }
  return 'something went wrong'
}