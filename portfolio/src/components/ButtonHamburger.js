export const ButtonHamburger=({showNavigation, setShowNavigation})=>{
    return(
        <div className={`container ${showNavigation ? 'change': ''}`} onClick={()=>{setShowNavigation(!showNavigation)}}>
            <div className={"bar1"}></div>
            <div className={"bar2"}></div>
            <div className={"bar3"}></div>
        </div>
    )
}