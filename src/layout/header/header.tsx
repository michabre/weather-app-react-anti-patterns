import { useContext } from "react";
import { ThemeContext } from "../../theme-provider/ThemeContext";
import { BsSun, BsMoonStarsFill } from "react-icons/bs"
import "./header.scss"

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const themeIcon = theme === "light" ? <BsSun size={16} /> : <BsMoonStarsFill size={16} />
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand is-justify-content-space-between is-align-items-center">
        <h1 className="navbar-item title is-3 mb-0">
          Weather Application
        </h1>
        <button className={"button is-capitalized"} onClick={toggleTheme}><span className="mr-2">{theme} Mode</span> {themeIcon}</button>
      </div>
    </nav>
  )
}

export default Header
