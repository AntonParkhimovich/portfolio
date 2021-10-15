import { Link } from "react-scroll";
import LanguageContext from "../contextLanguage";
import { useContext} from "react";
export const Navigation =({showNavigation})=>{
    const [language, setLanguage] = useContext(LanguageContext);
    
    return(
        <nav className={`navigation ${showNavigation? 'open': ''}`}>
        <ul className={"navigation-items"}>
        <Link
            activeClass="active"
            className={"navigation-item"}
            smooth={true}
            duration={300}
            spy={true}
            offset={-100}
            to="home" >
        {language.navigation.home}
        </Link>
          <Link
            className={"navigation-item"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            to="about"
          >
            {language.navigation.about}
          </Link>
          <Link
            className={"navigation-item"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            to="portfolio"
          >
            {language.navigation.portfolio}
          </Link>
          <Link
            className={"navigation-item"}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            to="contact"
          >
            {language.navigation.contact}
          </Link>
        </ul>
      </nav>
    )
}