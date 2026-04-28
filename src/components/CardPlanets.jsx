import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPlanets = ({planets}) => {
    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store.favoritos.some(fav => fav === planets.name);

    return (
        <div className="card m-2 bg-dark text-white border-secondary" style={{ minWidth: "18rem" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${planets.uid}.jpg`} className="card-img-top" alt="" style={{ height: "300px" }} />
            <div className="card-body">
                <h5 className="card-title fw-bold">{planets.name}</h5>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to={`/planet/${planets.uid}`} className="btn btn-outline-primary px-4">Learn more!</Link>
                    <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => dispatch({ type: "add_favorite", payload: planets.name })}
                    >
                        <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
