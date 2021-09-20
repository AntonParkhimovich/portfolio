import { useContext } from "react";
import {
    NavLink
  } from "react-router-dom";
import LanguageContext from "../contextLanguage";
export const Header =()=>{
    const [language, setLanguage] = useContext(LanguageContext)
    
    return(
        <header className={'header'}>
            <nav className={'navigation'}>
                <ul className={'navigation-items'}>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="/">{language.navigation.home}</NavLink>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="/about">{language.navigation.about}</NavLink>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="portfolio">{language.navigation.portfolio}</NavLink>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="contact">{language.navigation.contact}</NavLink>
                </ul>
            </nav>
        </header>
    )
}