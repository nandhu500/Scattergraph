import "./App.css";
import AddData from "./components/AddData";
import ChartComponent from "./components/ChartComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Norsia App</h3>
        <ChartComponent />
        <AddData />
      </header>
    </div>
  );
}

export default App;
