import DispatchEvent from "./pages/DispatchEvent";
import DragDrop from "./pages/DragDrop";
import EventBubbling from "./pages/EventBubbling";
import FileDrop from "./pages/FileDrop";
import FileInput from "./pages/FileInput";
import OnChange from "./pages/OnChange";
import StopPropagation from "./pages/StopPropagation";
import VariousInputs from "./pages/VariousInputs";
import ReactOnClick from "./pages/ReactOnClick";
import OnClick from "./pages/OnClick";
import EventListener from "./pages/EventListener";

function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener />
    </div>
  );
}

export default App;
