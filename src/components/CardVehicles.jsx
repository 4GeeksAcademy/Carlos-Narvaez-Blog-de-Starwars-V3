import { Link } from "react-router-dom";

export const CardVehicles = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <h3>Carta de Veiculos</h3>

                    <div class="card" style={{width: "18rem;"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>

            </div>
        </nav>
    );
};