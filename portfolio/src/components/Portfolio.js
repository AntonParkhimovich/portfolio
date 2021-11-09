import { useContext, useState } from "react";
import LanguageContext from "../contextLanguage";
import { portfolioData } from "../portfolioData";
import { PortfoliItem } from "./PortfolioItem";
import { PortfolioNavigation } from "./PortfolioNacigation";
import Fade from 'react-reveal/Fade';
export const Portfolio = () => {
  const [language] = useContext(LanguageContext);
  let [itemFilter, setItemFilter] = useState("all");
  return (
    <Fade cascade top  duration={500}>
    <div className={"portfolio"} id='portfolio'>
      <h2 className={"portfolio-title"}>{language.portfolio.title}</h2>
      <div className={"portfolio-header"}>
        <PortfolioNavigation setItemFilter={setItemFilter} />
      </div>
      <div className={"portfolio-main"}>
        {itemFilter === "all"
          ? portfolioData.map(({ languageKey, img, github }) => {
              return (
                <PortfoliItem
                  img={img}
                  textData={language.portfolio[languageKey]}
                  github={github}
                />
              );
            })
          : portfolioData.map(({ languageKey, img, github, tag }) => {
              if (tag === itemFilter) {
                return (
                  <PortfoliItem
                    img={img}
                    textData={language.portfolio[languageKey]}
                    github={github}
                  />
                );
              } else {
                return null;
              }
            })}
      </div>
    </div>
    </Fade>
  );
};
