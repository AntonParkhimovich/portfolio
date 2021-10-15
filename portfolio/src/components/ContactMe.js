import LanguageContext from "../contextLanguage";
import { useContext } from "react";
import { Form } from "./Form";
export const ContactMe = () => {
  const [language] = useContext(LanguageContext);

  return (
    <section className={"contact-me"} id='contact'>
      <h2 className={"contact-me__title"}>{language.contactMe.title}</h2>
      <Form />
    </section>
  );
};
