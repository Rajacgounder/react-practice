import './App.css';
import State from "./components/State"
import Counter from "./components/Counter"
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
    <FunctionClick />
    <ClassClick />
     {/* <h1>Hello World!!!!!!</h1>
     <State/> */}
     {/* <Counter /> */}
     {/* <Greet name="Raja" college="PES"/> */}
     {/* <Greet name="Vineth" college="Joshep"/> */}
     {/* <Greet name="Soto" college="Kristu"/>
     <Greet name="Ravi" college="Allaince"/> */}
     {/* <Welcome  name="Raja" college="PES" /> */}
    </div>
  );
}

export default App;
