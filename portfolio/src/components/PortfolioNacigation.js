import { useState } from "react"

export const PortfolioNavigation =({setItemFilter})=>{
    const [link, setActiveLink]= useState({
        activeLink:'all',
        likns:[{id:'all'}, {id:'javascript'}, {id:'react'}]
    })
    const clickHandler=(event)=>{
        setActiveLink({...link, activeLink: event.target.id})
        setItemFilter(event.target.id)
    }
    const toogleActiveClass=(id)=>{
       if(link.activeLink === id){
           return 'portfolio-header__item active-item'
       }else{
           return 'portfolio-header__item'
       }
    }
    return(
        <nav className={'portfolio-header__navigation'}>
            {link.likns.map((item)=>{
                return <div className={toogleActiveClass(item.id)} id={item.id} onClick={clickHandler}>{item.id}</div>
            })}
        </nav>
    )
}