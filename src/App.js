import "./App.css";
import Component from "./components/component/component";
import PureComponent from "./components/pureComponent/pureComponent.js";
import FunctionalComponent from "./components/functionalComponent/functionalComponent";
import ArrowFunctionComponent from "./components/arrowFunctionalComponent/arrowFuctionalComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello World1!</h1>
      <ArrowFunctionComponent />
      <FunctionalComponent />
      <Component />
      <PureComponent />
    </div>
  );
}

export default App;
