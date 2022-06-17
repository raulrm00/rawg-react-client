import { Link, NavLink } from 'react-router-dom'

export default function Navbar () {
  return (
        <nav className="flex justify-between w-full px-8 py-2 bg-slate-400">
            <Link to="/">
                <h1>RAWG Client</h1>
            </Link>
            <div className="space-x-4">
                <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="/" key="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'font-bold' : ''} to="/about" key="/about">About</NavLink>
            </div>
        </nav>
  )
}
