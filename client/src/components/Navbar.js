import React from 'react'
import {useDarkMode} from '../hooks/DarkMode'

const Navbar = () => {
    const toggleDark = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    const [darkMode, setDarkMode] = useDarkMode(toggleDark)

    return (
        <div className="dark-mode__toggle">
        <button
          onClick={toggleDark}
          data-testid='darkmode'
          className={darkMode ? 'toggle toggled' : 'toggle'}

        >Go Dark </button>
      </div>
    )
}

export default Navbar;