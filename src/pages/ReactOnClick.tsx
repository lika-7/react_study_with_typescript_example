import { SyntheticEvent } from "react";

const ReactOnClick = () => {
  const onClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e;
    console.log("mouse click occures on <button>", isTrusted, target, bubbles);
  };
  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>Click Ne</button>
    </div>
  );
};

export default ReactOnClick;
