const rootDiv = document.getElementById("root");
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e;
    console.log("mouse click  occures.", isTrusted, target, bubbles);
  };
  rootDiv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e;
    console.log("mouse click also occures.", isTrusted, target, bubbles);
  };
}

const OnClick = () => {
  return <div>Onclick</div>;
};

export default OnClick;
