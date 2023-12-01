import { createContext, useReducer } from "react";

export const ContextGlobal = createContext({});

export const initialState = {
  theme: "light",
  data: [],
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

  const contextValue = {
    ...state,
    changeTheme,
  };
  return (
    <ContextGlobal.Provider value={{ contextValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};
