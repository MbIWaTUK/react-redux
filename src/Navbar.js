import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">MAIN</NavLink>
      </div>
      <div>
        <NavLink to="/profile">PROFILE</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs">DIALOGS</NavLink>
      </div>
      <div>
        <NavLink to="/users">USERSLIST</NavLink>
      </div>
    </nav>
  )
}

export default Navbar