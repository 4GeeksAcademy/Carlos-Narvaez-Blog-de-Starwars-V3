import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-dark bg-dark mb-4 px-5 shadow">
      <Link to="/" className="navbar-brand">
        <img src="https://wikimedia.org" height="40" alt="Star Wars" />
      </Link>
      <div className="dropdown">
        <button className="btn btn-warning dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown">
          Favorites <span className="badge bg-dark ms-1">{store.favoritos.length}</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end p-2 shadow" style={{ minWidth: "220px" }}>
          {store.favoritos.length === 0 ? (
            <li className="text-center text-muted py-2">(Empty)</li>
          ) : (
            store.favoritos.map((fav, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center mb-1">
                <Link to={`/${fav.type === 'people' ? 'character' : fav.type}/${fav.uid}`} className="dropdown-item text-truncate me-2">
                  {fav.name}
                </Link>
                <i className="fa fa-trash text-danger pe-2" style={{ cursor: "pointer" }}
                   onClick={() => dispatch({ type: "delete_favorite", payload: fav.name })}></i>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

