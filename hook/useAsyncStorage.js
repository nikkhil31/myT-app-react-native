import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = (key) => {
  const [storageItem, setStorageItem] = useState(null);
  const [error, setError] = useState();

  async function getStorageItem() {
    const data = await AsyncStorage.getItem(key);
    setStorageItem(data);
  }

  const updateStorageItem = async (data) => {
    try {
      if (typeof data === "string") {
        await AsyncStorage.setItem(key, data);
        setStorageItem(data);
        return data;
      }
    } catch (error) {
      console.log("error", error.message);
      setError(error.message);
    }
  };

//   function clearStorageItem() {
//     AsyncStorage.removeItem(key);
//     setStorageItem(null);
//   }

  useEffect(() => {
    getStorageItem();
  }, []);

  return { storageItem, updateStorageItem };
};
