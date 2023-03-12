import "./App.css";
import Home from "./components/Home/Home";
import Persons from "./components/Persons/Persons";
import Tricks from "./components/Tricks/Tricks";
import { Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route default path='/' element={<Home/>} />
        <Route path="/persons" element={<Persons/>} />
        <Route path="/tricks" element={<Tricks/>} />
      </Routes>
    </div>
  );
}

export default App;
