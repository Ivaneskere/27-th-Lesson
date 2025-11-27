import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../contexts/languageContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext )
    const { lang, toggleLanguage } = useContext(LanguageContext)

    return (
        <div>
            <header>
                <div className="justify-center">
                    <Link to="/contacts"><button className="p-2 rounded-full bg-gray-200 text-black">Contacts</button></Link>
                    <Link to="/forms"><button className="p-2 rounded-full bg-gray-200 text-black">Add Contacts</button></Link>
                </div>
                <div className="flex gap-4 p-4 justify-center">
                    <nav className="flex gap-2">
                        {theme === 'light' && <button onClick={toggleTheme} type="button" className="p-2 rounded-full bg-gray-200  hover:bg-gray-300 ">🌙</button>}
                        {theme === 'dark' &&  <button onClick={toggleTheme} type="button" className="p-2 rounded-full bg-gray-200  hover:bg-gray-300 ">☀️</button>}
                    </nav>
                    <nav className="flex gap-2">
                        {lang === 'ua' && <button onClick={toggleLanguage} type="button" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300  transition text-black">UA</button>}
                        {lang === 'en' && <button onClick={toggleLanguage} type="button" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300  transition text-black">EN</button>}
                    </nav>
                </div>
            </header>
        </div>
    )
}
