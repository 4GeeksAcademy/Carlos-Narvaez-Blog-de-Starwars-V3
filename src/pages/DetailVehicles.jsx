import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export const DetailVehicles = () => {
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
                    />
                </div>
                <div className="col-md-6">
                    <h1>{details.name}</h1>
                    <div className="row text-danger border-top pt-3 mt-3">
                        <div className="col-4"><strong>Model</strong><br/>{details.model}</div>
                        <div className="col-4"><strong>Vehicle Class</strong><br/>{details.vehicle_class}</div>
                        <div className="col-4"><strong>Manufacturer</strong><br/>{details.manufacturer}</div>
                        <div className="col-4 mt-3"><strong>Cost</strong><br/>{details.cost_in_credits}</div>
                        <div className="col-4 mt-3"><strong>Passengers</strong><br/>{details.passengers}</div>
                        <div className="col-4 mt-3"><strong>Length</strong><br/>{details.length}</div>
                    </div>
                </div>
            </div>
            <Link to="/starwars" className="btn btn-primary mt-5">Back to Starwars</Link>
        </div>
    );
};
