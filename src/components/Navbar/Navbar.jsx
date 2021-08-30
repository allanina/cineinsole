import "./style.css"
import { Link } from 'react-router-dom'

const Navbar = () =>{
  return (
    <nav className="navbar">

      <div className="div-logo">
        <Link className="logo" to="/">CineInsole</Link>
      </div>

        <Link className="now-playing" to="/">Em cartaz</Link>
        <Link className="search-movies" to="/search">Pesquisar filmes</Link>
    </nav>
  )
}

export default Navbar;