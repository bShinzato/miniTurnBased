"use client"
import { useState } from 'react'

export default function GamePage() {
  const [playerName, setPlayerName] = useState('')
  const [playerNameInput, setPlayerNameInput] = useState('')


  return (
    <main>
      <h1>Enter your Heroes Name</h1>
      
      <input
        type = 'text'
        value = {playerNameInput}
        onChange = {(e) => setPlayerNameInput(e.target.value)}
        placeholder = 'Enter your Heroes Name'
      />

      <button onClick = {() => setPlayerName(playerNameInput)}>
        Continue
      </button>

      <p>Your name is: {playerName}</p>
    </main>
  )
}