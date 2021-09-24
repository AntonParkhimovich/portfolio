import logo from './logo.svg';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import './styles/main.scss'
import { Header } from './components/Header';
import { useState } from 'react';
import { languagePack } from './languagePack';
import LanguageContext from './contextLanguage';
import { HelloSection } from './components/HelloSection';
import { About } from './components/About';

function App() {
  const [language, setLanguage]= useState('en')
  return (

    <Router>
    <LanguageContext.Provider value={[languagePack[language], setLanguage]}>
      <Header/>
      <HelloSection/>
      <About/>
   </LanguageContext.Provider>
   </Router>
   
  );
}

export default App;
