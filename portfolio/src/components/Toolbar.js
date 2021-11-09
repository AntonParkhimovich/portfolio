import { useState, useEffect } from "react";

export const Toolbar = ({ text, procents }) => {
  const [countedProcents, setCounted] = useState(0)

  useEffect(() => {
    let timerId
    if (countedProcents < procents) {
      timerId = setTimeout(() => setCounted(countedProcents + 1), 10)
    }
    return () => {
      if (timerId !== undefined) {
        clearTimeout(timerId)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countedProcents]);
  return (
    <div className={"about-skills__toolbar"}>
      <div style={{ width: `${countedProcents}%` }} className={"about-skills__fill"}>
        <div className={'about-skills__fill-paint'}></div>
        <div className={"about-skills__text"}>{text}</div>
      </div>
      <span className={"about-skills__procents"}>{countedProcents}%</span>
    </div>
  );
};
