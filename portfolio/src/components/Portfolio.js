import { useContext, useState } from "react";
import LanguageContext from "../contextLanguage";
import { NavLink } from "react-router-dom";
import { portfolioData } from "../portfolioData";
import { PortfoliItem } from "./PortfolioItem";
import { PortfolioNavigation } from "./PortfolioNacigation";
export const Portfolio = () => {
  const [language] = useContext(LanguageContext);
  let [itemFilter, setItemFilter] = useState("all");
  return (
    <div className={"portfolio"}>
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
  );
};
