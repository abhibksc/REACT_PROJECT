import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider  = ({ children }) => {


  const [Data, setData] = useState({});
  const [id, setId] = useState(0);
  const [arr, setArr] = useState([]);
  const [TitleValue, setTitleValue] = useState("");
  const [UrlValue, setUrlValue] = useState("");
 
  

  return (
    <Context.Provider value={{ arr,setArr, Data, setData, id, setId,TitleValue, setTitleValue,UrlValue, setUrlValue }}>
      {children}
    </Context.Provider>
  );
};
