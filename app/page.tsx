import Link from "next/link"

export default function HomePage() {
  return (
    <main>
      <h1>Turn Based Game</h1>
      <p>Simple Click Game</p>
      <Link href='/game'>Start Game</Link>
    </main>
  )
}