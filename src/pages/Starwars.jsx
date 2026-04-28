import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CardPeople } from "../components/CardPeople.jsx";
import { CardPlanets } from "../components/CardPlanets.jsx";
import { CardVehicles } from "../components/CardVehicles.jsx";
import React, { useEffect } from "react"

export const Starwars = () => {
    const { store, dispatch } = useGlobalReducer()

    async function cartaPersonajes() {
        try {
            const response = await fetch("https://www.swapi.tech/api/people/");
            if (!response.ok) throw new Error(`Error: ${response.statusText}`)
            const data = await response.json()
            dispatch({ type: "set_personajes", payload: { personaje: data.results } })
        } catch (error) { console.error("Error cargando personajes:", error) }
    }

    async function cartaPlanetas() {
        try {
            const response = await fetch("https://www.swapi.tech/api/planets/");
            if (!response.ok) throw new Error(`Error: ${response.statusText}`)
            const data = await response.json()
            dispatch({ type: "set_planets", payload: { planets: data.results } })
        } catch (error) { console.error("Error cargando planetas:", error) }
    }

    async function cartaVehiculos() {
        try {
            const response = await fetch("https://www.swapi.tech/api/vehicles/");
            if (!response.ok) throw new Error(`Error: ${response.statusText}`)
            const data = await response.json()
            dispatch({ type: "set_vehicles", payload: { vehicles: data.results } })
        } catch (error) { console.error("Error cargando vehiculos:", error) }
    }

    useEffect(() => {
        cartaPersonajes();
        cartaPlanetas();
        cartaVehiculos();
    }, []); // Empty array prevents the infinite fetch loop

    return (
        <div className="container">
            <h2>Starwars</h2>
            <h3>People</h3>
            <div className="d-flex" style={{ overflow: "auto" }}>
                {store.character?.map((value, index) => <CardPeople key={index} people={value} />)}
            </div>

            <h3>Planets</h3>
            <div className="d-flex" style={{ overflow: "auto" }}>
                {store.planets?.map((value, index) => <CardPlanets key={index} planets={value} />)}
            </div>

            <h3>Vehicles</h3>
            <div className="d-flex" style={{ overflow: "auto" }}>
                {store.vehicles?.map((value, index) => <CardVehicles key={index} vehicles={value} />)}
            </div>

            <Link to="/"><button className="btn btn-primary my-3">Back home</button></Link>
        </div>
    );
};
