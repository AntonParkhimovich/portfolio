import LanguageContext from "../contextLanguage";
import { useContext } from "react";
import { skills } from "../skillsData";
import { Toolbar } from "./Toolbar";
import Fade from 'react-reveal/Fade';
export const About = () => {
  const [language] = useContext(LanguageContext);
  return (
    <Fade top cascade fraction={0.6} duration={500}>
    <section className={"about"} id='about'>
      
      <h2 className={"about-title"}>{language.about.title}</h2>
      
      <div className={"about-main"}>
        <div className={"about-me"}>
          <div className={"about-me__avatar"}></div>
        </div>
        <div className={"about-skills"}>
          {skills.map(({ text, procent }) => {
            return <Toolbar text={text} procents={procent} />;
          })}
        </div>
        <span className={"about-me__text"}>{language.about.description}</span>
      </div>
    </section>
    </Fade>
  );
};
