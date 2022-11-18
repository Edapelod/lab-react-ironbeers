import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randombeers from "../assets/random-beer.png";
import newbeers from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <Link className="links" to="/beers">
        <img src={beers} alt="all-beers" style={{ width: "500px" }} />{" "}
        <h1>All Beers</h1>
      </Link>

      <Link className="links" to="/random-beer">
        <img src={randombeers} alt="random-beer" style={{ width: "500px" }} />
        <h1>Random Beer</h1>
      </Link>

      <Link className="links" to="/new-beer">
        <img src={newbeers} alt="new-beer" style={{ width: "500px" }} />
        <h1>New Beer</h1>
      </Link>
    </div>
  );
}

export default Home;
