// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { CardCharacters } from "../components/CardCharacters.jsx";
import { CardPlanets } from "../components/CardPlanets.jsx";
import { CardVehicles } from "../components/CardVehicles.jsx";

export const Starwars = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  //const { store, dispatch } = useGlobalReducer()

  fetch("https://www.swapi.tech/api/people/1")
    .then(res => res.json())
    .then(data => console.log(data.results))
    .catch(err => console.error(err))

  return (
    <div className="container">
      <h2>Starwars</h2>
        <h3>Characters</h3>
          <CardCharacters />
        <h3>Planets</h3>
          <CardPlanets />
        <h3>Vehicles</h3>
          <CardVehicles /> 

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
