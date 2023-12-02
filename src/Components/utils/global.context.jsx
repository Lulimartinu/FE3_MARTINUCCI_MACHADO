import { createContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext({});

export const initialState = {
  theme: "light",
  FAVS: [],
};

// global para el cambio de color, light o dark
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const root = document.documentElement;
      if (state.theme === "dark") {
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
      }
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };
    }
    case "ADD_FAVS": {
      const newFavs = [...state.FAVS, action.payload];
      return { ...state, FAVS: newFavs };
    }

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  function changeTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  /*
  async function getFavs() {
    const res = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    dispatch({ type: "ADD_FAVS", payload: res });
  }
*/
  const contextValue = {
    ...state,
    changeTheme,
  };
/*
  useEffect(() => {
    getFavs();
  }, []);
*/
  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
