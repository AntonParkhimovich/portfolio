import { useForm } from 'react-hook-form'
import LanguageContext from "../contextLanguage";
import { useContext } from 'react';
export const Form =()=>{
      const { register, handleSubmit } = useForm()
      const [language] = useContext(LanguageContext)
      const onSubmit = data => console.log(data);

    return(
             <form onSubmit = {handleSubmit(onSubmit)} className={'contact-me__form'}>    
                <input className={'form-item'} {... register('Имя')} placeholder={language.contactMe.form.name}/>
                <input className={'form-item'} {... register('Компания')}placeholder={language.contactMe.form.company}/>
                <input className={'form-item'} {... register('Почта')}placeholder={language.contactMe.form.email}/>
                <textarea  className={'textarea'}{... register('Сообщение')}placeholder={language.contactMe.form.message} />
                <input className={'submit-button'} type='submit' value={language.contactMe.form.submit}/>
            </form>
       
    )  
}