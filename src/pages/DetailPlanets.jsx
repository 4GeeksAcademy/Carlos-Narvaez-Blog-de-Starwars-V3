import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const DetailPlanets = () => {
    const { uid } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.tech{uid}`)
            .then(res => res.json())
            .then(data => setDetails(data.result.properties))
            .catch(err => console.error(err));
    }, [uid]);

    if (!details) return <div className="container">Loading...</div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={`https://githubusercontent.com{uid}.jpg`} 
                        className="img-fluid" 
                        alt={details.name} 
                        onError={(e) => e.target.src = "https://starwars-visualguide.com"}
                    />
                </div>
                <div className="col-md-6">
                    <h1>{details.name}</h1>
                    <div className="row text-danger border-top pt-3 mt-3">
                        <div className="col-4"><strong>Climate</strong><br/>{details.climate}</div>
                        <div className="col-4"><strong>Population</strong><br/>{details.population}</div>
                        <div className="col-4"><strong>Terrain</strong><br/>{details.terrain}</div>
                        <div className="col-4 mt-3"><strong>Diameter</strong><br/>{details.diameter}</div>
                        <div className="col-4 mt-3"><strong>Gravity</strong><br/>{details.gravity}</div>
                        <div className="col-4 mt-3"><strong>Orbital Period</strong><br/>{details.orbital_period}</div>
                    </div>
                </div>
            </div>
            <Link to="/starwars" className="btn btn-primary mt-5">Back to Starwars</Link>
        </div>
    );
};
