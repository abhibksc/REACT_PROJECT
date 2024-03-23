import { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";

const useContentLoader = () => {
  const { arr, setArr } = useContext(Context);

  useEffect(() => {
    const loadDataFromLocalStorage = () => {
      const newData = []; 

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const data = JSON.parse(value);
        newData.push(data);
      }
      setArr([...newData, ...arr ]);
    };

    loadDataFromLocalStorage(); 
  }, []); 
};

export default useContentLoader;
