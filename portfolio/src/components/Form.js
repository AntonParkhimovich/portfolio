import { useForm } from "react-hook-form";
import LanguageContext from "../contextLanguage";
import { useContext } from "react";
import axios from "axios";
export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [language] = useContext(LanguageContext);

  const onSubmit = (data) => {
    axios
      .post(
        `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`,
        {
          chat_id: process.env.REACT_APP_CHAT_ID,
          text: data,
        }
      )
      .then(() => reset());
  };
  const onError = (err) => {
    return <i className={"error-message"}>{err.message}</i>;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"contact-me__form"}>
      <input
        className={errors.Имя ? "form-item error" : "form-item"}
        {...register("Имя", { required: language.contactMe.form.error })}
        placeholder={language.contactMe.form.name}
      />
      {errors.Имя && onError(errors.Имя)}
      <input
        className={"form-item"}
        {...register("Компания")}
        placeholder={language.contactMe.form.company}
      />
      <input
        className={errors.Почта ? "form-item error" : "form-item"}
        {...register("Почта", { required: language.contactMe.form.error })}
        placeholder={language.contactMe.form.email}
      />
      {errors.Почта && onError(errors.Почта)}
      <textarea
        className={errors.Сообщение ? "textarea error" : "textarea"}
        {...register("Сообщение", { required: language.contactMe.form.error })}
        placeholder={language.contactMe.form.message}
      />
      {errors.Сообщение && onError(errors.Сообщение)}
      <input
        className={"submit-button"}
        type="submit"
        value={language.contactMe.form.submit}
      />
    </form>
  );
};
