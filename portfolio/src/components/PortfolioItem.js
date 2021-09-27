 export const PortfoliItem =({img, textData, github})=>{
    return(
        <div class="card">
          <div class="front_side">
              <img src={img}className={'card-image'}></img>
          </div>
          <div class="back_side">
              <h2 className={'item-title'}>{textData.title}</h2>
              <span className={'item-description'}>{textData.description}</span>
              <a href={github} className={'button-github'}>Github</a>
          </div>
        </div>
    )
}