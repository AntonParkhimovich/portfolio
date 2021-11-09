import { useContext } from "react";
import LanguageContext from "../contextLanguage";
import Fade from 'react-reveal/Fade';

export const HelloSection = () => {
  const [language] = useContext(LanguageContext);

  return (
    <section className={"hello-section"} id='home'>
      <div className={"hello-section__main"}>
        <Fade delay={500} cascade duration={500}>
          <h2 className={"hello-section__title"}>
            {language.helloSection.title}
          </h2>
          <h2 className={"hello-section__subtitle"}>
            {language.helloSection.subtitle}
          </h2>
        </Fade>
      </div>
    </section>
  );
};
