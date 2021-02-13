import './App.css';
import Component from './components/component/component'
import PureComponent from './components/pureComponent/pureComponent.js'
import FunctionalComponent from './components/functionalComponent/functionalComponent'
import ArrowFunctionComponent from "./components/arrowFunctionalComponent/arrowFuctionalComponent";

function App() {
  return (
    <div className="App">
    <ArrowFunctionComponent/>
    <FunctionalComponent/>
    <Component/>
    <PureComponent/>
    </div>
  );
}

export default App;
