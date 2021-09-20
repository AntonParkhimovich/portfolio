import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './styles/main.scss'
import { Header } from './components/Header';

function App() {
  return (
    <Router>
   <Header/>
   </Router>
  );
}

export default App;
