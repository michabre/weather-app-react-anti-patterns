import { useContext } from "react";
import { ThemeContext } from "../../theme-provider/ThemeContext";
import "./header.css"

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-justify-content-space-between is-align-items-center">
        <h1 className="navbar-item title is-3">
          Weather Application
        </h1>
        <button className="button" onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </nav>
  )
}

export default Header
