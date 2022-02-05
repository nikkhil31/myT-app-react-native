import React, { createContext, useContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Context = createContext();

export function useProvider() {
  return useContext(Context);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, task: [...state.task, action.payload] };
    case "TASK_COMPLETED":
      return {
        ...state,
        task: action.payload,
      };
    case "APP_READY":
      return { ...state, task: action.payload, isAppReady: true };

    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  //   const { storageItem } = useAsyncStorage("@myT_app");

  const [state, dispatch] = useReducer(reducer, {
    task: [],
    isAppReady: false,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("@myT_app");
        const tasks = jsonValue != null ? JSON.parse(jsonValue) : [];
        // console.log(tasks);
        dispatch({ type: "APP_READY", payload: tasks });
      } catch (error) {
        console.log("error", error.message);
      }
    };

    getData();
  }, []);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
