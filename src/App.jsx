import { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { gql, useQuery } from "@apollo/client";

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      age
      nationality
    }
  }
`

function App() {

  const { data, error, loading } = useQuery(ALL_PERSONS)

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
