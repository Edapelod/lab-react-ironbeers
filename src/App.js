import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Beer from "./components/beers";
import NewBeer from "./components/new-beer";
import RandomBeer from "./components/random-beer";

function App() {
  const [beers, setBeers] = useState([]);
  const fetchBeers = async () => {
    const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
    const parsed = await response.json();
    console.log(parsed);
    setBeers(parsed);
  };
  useEffect(() => {
    fetchBeers();
  }, []);
  return (
    <div className="App">
      <h2>List of Beers</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beer />} />
        <Route path="/random-beer" element={<NewBeer />} />
        <Route path="/new-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
