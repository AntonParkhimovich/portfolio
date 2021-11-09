import LanguageContext from "../contextLanguage";
import { useContext } from "react";
import Fade from 'react-reveal/Fade';
import { Form } from "./Form";
export const ContactMe = () => {
  const [language] = useContext(LanguageContext);

  return (
    <Fade cascsde fraction={0.6}>
      <section className={"contact-me"} id='contact'>
        <h2 className={"contact-me__title"}>{language.contactMe.title}</h2>
        <Form />
      </section>
    </Fade>
  );
};
