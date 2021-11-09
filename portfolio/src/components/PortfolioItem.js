export const PortfoliItem = ({ img, textData, github }) => {
  return (
    <div className="card">
      <div className="front_side">
        <img src={img} alt={'card-avatar'} className={"card-image"}></img>
      </div>
      <div className="back_side">
        <h2 className={"item-title"}>{textData.title}</h2>
        <span className={"item-description"}>{textData.description}</span>
        <a href={github} className={"button-github"}>
          Github
        </a>
      </div>
    </div>
  );
};
