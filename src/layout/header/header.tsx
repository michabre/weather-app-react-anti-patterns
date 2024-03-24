import { useContext } from "react";
import { ThemeContext } from "../../theme-provider/ThemeContext";
import "./header.scss"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-justify-content-space-between is-align-items-center">
        <h1 className="navbar-item title is-3 mb-0">
          Weather Application
        </h1>
        <button className={"button is-capitalized is-" + theme} onClick={toggleTheme}>{theme} Mode</button>
      </div>
    </nav>
  )
}

export default Header
