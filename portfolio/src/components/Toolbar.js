export const Toolbar = ({ text, procents }) => {
  return (
    <div className={"about-skills__toolbar"}>
      <div style={{ width: procents }} className={"about-skills__fill"}>
        <div className={"about-skills__text"}>{text}</div>
      </div>
      <span className={"about-skills__procents"}>{procents}</span>
    </div>
  );
};
