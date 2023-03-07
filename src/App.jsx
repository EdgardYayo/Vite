import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Persons from "./components/Persons/Persons";



function App() {

  return (
    <div className="App">
      <Routes>
        <Route default path='/' element={<Home/>} />
        <Route path="/persons" element={<Persons/>} />
      </Routes>
    </div>
  );
}

export default App;
