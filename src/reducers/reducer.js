export const reducer = (state, action) => {
    switch (action.type) { 
      case "GET_CHARS": 
        return {...state, chars: action.payload};
      case "CHANGE_THEME":
        return {...state, theme: state.theme === "light" ? "dark" : "light"};
        case "ADD_FAV" :
          return {...state, favs: [...state.favs, action.payload]};
        case "REMOVE_FAV" :
            const filteredFavs = state.favs.filter(
                (fav) => fav.id !== action.payload.id
              );
            return { ...state, favs: filteredFavs };
     } 
    }
