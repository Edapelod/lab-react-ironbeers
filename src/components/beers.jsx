import { useEffect, useState } from "react";

function Beer() {
  const [beers, setBeers] = useState([]);
  const fetchBeers = async () => {
    const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
    const parsed = await response.json();

    setBeers(parsed);
  };

  useEffect(() => {
    fetchBeers(setBeers);
  }, []);

  return beers ? (
    <>
      <img src={beers.img} />
      <h2>{beers.name}</h2>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Beer;
