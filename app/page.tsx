import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Turn Based Game</h1>
      <p className="text-lg mb-6">Simple Click Game</p>
      <Link href='/game' 
       className="mt-6 bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-600 hover:scale-105 hover:animate-bounce transition-duration-5000 hover:cursor-pointer">
        Start Game
      </Link>
    </main>
  )
}