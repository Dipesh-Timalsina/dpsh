import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStorage('theme', "dark")
    
    function handleToogleTheme() {
        setTheme(theme === 'light' ? 'dark': 'light')
    }
    console.log(theme);
    return (
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello World !</p>
          <button onClick={handleToogleTheme}>Change Theme</button>
        </div>
      </div>
    );
}