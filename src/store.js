export const initialStore = () => ({
  character: [],
  planets: [],
  vehicles: [],
  favoritos: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_personajes': return { ...store, character: action.payload.personaje };
    case 'set_planets': return { ...store, planets: action.payload.planets };
    case 'set_vehicles': return { ...store, vehicles: action.payload.vehicles };
    
    case 'add_favorite':
      if (store.favoritos.some(f => f.uid === action.payload.uid && f.type === action.payload.type)) return store;
      return { ...store, favoritos: [...store.favoritos, action.payload] };
      
    case 'delete_favorite':
      return { ...store, favoritos: store.favoritos.filter(f => f.name !== action.payload) };
      
    default: return store;
  }
}

