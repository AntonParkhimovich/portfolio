import { useState } from "react";
import { ButtonHamburger } from "./ButtonHamburger";
import { Navigation } from "./Navigation";
export const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false)
  return (
    <header className={"header"}>
      <ButtonHamburger showNavigation={showNavigation} setShowNavigation={setShowNavigation} />
      <Navigation showNavigation={showNavigation} />
    </header>
  );
};
