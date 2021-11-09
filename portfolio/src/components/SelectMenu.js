import LanguageContext from "../contextLanguage";
import { useContext } from "react";
import Fade from 'react-reveal/Fade';
export const SelectMenu = () => {
    const [, setLanguage] = useContext(LanguageContext);
    return (
        <Fade top>
            <select className={'select-menu'} onChange={({ target }) => setLanguage(target.value)}>
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>
        </Fade>
    )
}