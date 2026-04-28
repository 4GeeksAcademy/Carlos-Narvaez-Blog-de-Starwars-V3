export const initialStore = () => {
  return {
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ],
    character: [],
    planets: [], // Added
    vehicles: [], // Added
    favoritos: [],
    saludo: "Hola desde Store",
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_personajes':
      return {
        ...store, 
        character: action.payload.personaje
      }

    case 'set_planets':
      return {
        ...store, 
        planets: action.payload.planets
      }

    case 'set_vehicles':
      return {
        ...store, 
        vehicles: action.payload.vehicles
      }

    case "change_saludo":
      return {
        ...store, 
        saludo: action.payload.message
      }

    case "add_contact":
      return {
        ...store, 
        contacts: [...store.contacts, action.payload]
      }

    default:
      // Changed from throw Error to return store to prevent app crashes on init
      return store;
  }
}
