import { useState, useEffect } from 'react'
import GameCard from '../GameCard/GameCard'

export default function HomePage () {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setGames(data.results))
  }, [])

  return (
    <>
      <h1 className="text-lg">Game Library</h1>
      <div className="grid grid-cols-4 gap-4">
        {games.map(game => (
          <GameCard key={game.id} name={game.name} />
        ))}
      </div>
    </>
  )
}
