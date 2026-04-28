import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CardPeople = ({ people }) => {
    const { store, dispatch } = useGlobalReducer();
    
    // Check if this item is already in favorites to toggle the heart color
    const isFavorite = store.favoritos.some(fav => fav.name === people.name);

    return (
        <div className="card m-2 shadow-sm border-0 bg-dark text-white" style={{ minWidth: "18rem" }}>
            <img 
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} 
                className="card-img-top" 
                alt={people.name} 
                style={{ height: "320px", objectFit: "cover" }} 
            />
            <div className="card-body">
                <h5 className="card-title fw-bold">{people.name}</h5>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Link to={`/character/${people.uid}`} className="btn btn-outline-info px-4">
                        Learn more!
                    </Link>
                    <button 
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => dispatch({ 
                            type: "add_favorite", 
                            payload: people.name 
                        })}
                    >
                        <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

