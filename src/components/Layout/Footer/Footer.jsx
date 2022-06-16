export default function Footer() {
  return (
    <footer className="w-full absolute bottom-0 bg-slate-500 px-8 py-2">
        <p>&copy; {new Date().getFullYear()} RAWG Client</p>
    </footer>
  )
}