import { useContext } from "react";
import LanguageContext from "../contextLanguage";

export const HelloSection = () => {
  const [language] = useContext(LanguageContext);
  return (
    <section className={"hello-section"}>
      <div className={"hello-section__main"}>
        <h2 className={"hello-section__title"}>
          {language.helloSection.title}
        </h2>
        <h2 className={"hello-section__subtitle"}>
          {language.helloSection.subtitle}
        </h2>
      </div>
    </section>
  );
};
