import {
    NavLink
  } from "react-router-dom";
export const Header =()=>{
    return(
        <header className={'header'}>
            <nav className={'navigation'}>
                <ul className={'navigation-items'}>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="/">Home</NavLink>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="/about">About</NavLink>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="portfolio">Portfolio</NavLink>
                    <NavLink className={'navigation-item'} activeClassName={'active'} to="contact">Contact me</NavLink>
                </ul>
            </nav>
        </header>
    )
}